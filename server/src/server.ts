import compression from "compression";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import publicRouter from "./routes/public.route.js";

const PORT = process.env.PORT || 5000

const app = express()

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(compression())
app.use(cors({
    origin: process.env.NODE_ENV === "production" ? "https://random-data-generator.netlify.app" : "http://localhost:3000"
}))

app.use("/", publicRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))