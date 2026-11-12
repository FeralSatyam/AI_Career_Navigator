import { getItems } from "../controllers/itemController.js";
import express from 'express';

const itemsRouter = express.Router()

itemsRouter.get('/getItems', getItems);

export default itemsRouter;