const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(filters) {
    try {
      const { search, take, skip, ...otherFilters } = filters;

      const where = {
        AND: [
          search
            ? { nomeCliente: { contains: search, mode: "insensitive" } }
            : {},
          ...Object.keys(otherFilters).map((key) => ({
            [key]: { contains: otherFilters[key], mode: "insensitive" },
          })),
        ],
      };

      const clientes = await prisma.clientes.findMany({
        where,
        take: Number(take) || 25,
        skip: Number(skip) || 0,
      });

      const formattedClientes = JSON.stringify(clientes, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );
      return formattedClientes;
    } catch (error) {
      error.path = "src/models/findManyClientes.js";
      throw error;
    } finally {
      await prisma.$disconnect(); // desconecta o Prisma Client do banco de dados
    }
  },
};
