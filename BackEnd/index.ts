import express, { Application } from "express";

import cors from "cors";
import { dbConfig } from "./utils/dbConfig";

const app: Application = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;
app.listen(port, () => {
  dbConfig();
});
