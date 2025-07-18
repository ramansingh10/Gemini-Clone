import express from "express";
import { information } from "../schemaController/schemaController.js";

const detailsRouter = express.Router();
detailsRouter.post('/send', information);

export default detailsRouter;