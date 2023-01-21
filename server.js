import express from "express";
import { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import authRouter from "./routes/auth-routes.js"
import usersRouter from "./routes/user-routes.js"
import componentsRouter from "./routes/component-routes.js"

dotenv.config(); // setup dotenv

const app = express();
const PORT = process.env.PORT || 4000;
const corsOptions = { credentails: true, origin: process.env.url || "*" };

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(json());

app.use("/api/components", componentsRouter)
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter)

app.listen(PORT, () => console.log(`running on port ${PORT}`));
