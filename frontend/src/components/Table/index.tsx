import { useEffect, useState } from "react";
import axios from "axios";

interface Client {
  nomeCliente: string;
  cidadeCliente: string;
  bairroCliente: string;
  planoContrato: string;
  statusInternet: number;
}

export default function Table() {
  const [clients, setClients] = useState<Client[]>([]);

  const listClients = async () => {
    try {
      const response = await axios.get<Client[]>(
        "http://localhost:3333/findManyCliente",
        {
          params: {
            take: 20,
          },
        }
      );
      console.log("Dados da API:", response.data);

      if (Array.isArray(response.data)) {
        setClients(response.data);
      } else {
        console.error("Dados inesperados da API", response.data);
      }
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
    }
  };

  useEffect(() => {
    listClients();
  }, []);

  return (
    <tbody>
      {clients.map((client, index) => (
        <tr key={index}>
          <td className="px-4 py-2 border-b border-gray-200">
            {client.nomeCliente}
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            {client.statusInternet === 1 ? "Ativo" : "Inativo"}
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            {client.bairroCliente}
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            {client.cidadeCliente}
          </td>
          <td className="px-4 py-2 border-b border-gray-200">
            {client.planoContrato}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
