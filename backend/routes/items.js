import { getItems, verifyToken } from "../controllers/itemController.js";
import express from 'express';

const itemsRouter = express.Router()

itemsRouter.get('/getItems', verifyToken, getItems);

export default itemsRouter;