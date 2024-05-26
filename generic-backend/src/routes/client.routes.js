const express = require(express);
const findByIdClientesController = require("../controllers/client/findManyClientes");

import { Router } from "express";

const clientRoutes = Router();

clientRoutes.get("/clients", findByIdClientesController.handle);

module.exports = clientRoutes;
