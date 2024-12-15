import express from "express";
//dotenv - hide keys
import dotenv from "dotenv";
//helmet - protect http headers
import helmet from "helmet";
//morgan - log console requests
import morgan from "morgan";
//middleware for connect/express
import cors from "cors";
//mongoose via atlas
import { dbConnect } from "./dbConnect/dbConnect.js";
//app routing
import routes from "./routes/routes.js";

const app = express();
dotenv.config();

app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3030, () => {
  console.log("Server is running on port 3030.");
  dbConnect();
});
