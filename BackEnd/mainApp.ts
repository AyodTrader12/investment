import { Application } from "express";
import user from "./router/router";

export const mainApp = (app: Application) => {
  try {
    app.use("/api", user);
  } catch (error) {
    return error;
  }
};
