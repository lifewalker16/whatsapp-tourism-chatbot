import express from "express";
const router =express.Router();
import { handleChat } from "../controller/chatController.js";


router.post("/chat",handleChat);

export default router; 