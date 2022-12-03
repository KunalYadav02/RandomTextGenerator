import { Request, Response } from "express";

declare type controller=(req:Request,res:Response)=>Promise<Response>