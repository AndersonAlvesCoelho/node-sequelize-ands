import express from "express";

import CnaeController from "./controllers/CnaeController";
import CnpjController from "./controllers/CnpjController";
import UsersController from "./controllers/UsersController";

// import checkToken from "./service/token";

const apiVersion = "/v1";

const routes = express.Router();

// ROTAS COM AUTENTICAÇÃO
// -----------------------
// routes.get(`${apiVersion}/user/:id`, checkToken, UsersController.show);
routes.post(`${apiVersion}/login`, UsersController.login);

routes.get(`${apiVersion}/cnae`, CnaeController.index);
routes.get(`${apiVersion}/cnpj`, CnpjController.index);




export default routes;
