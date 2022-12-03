import { Router } from "express";
import randomGenerator from "../controllers/main.controller.js";

const publicRouter = Router()

publicRouter.post("/", randomGenerator)

export default publicRouter