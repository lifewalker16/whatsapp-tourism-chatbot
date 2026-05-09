import express from "express";
const router =express.Router();
import { handleChat } from "../Controller/chatController.js";


router.post("/chat",handleChat);

export default router; 