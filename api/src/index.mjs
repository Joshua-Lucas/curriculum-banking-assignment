import dotenv from "dotenv";
dotenv.config();

import express from "express";
import createError from "http-errors";
import { migrateUpAndSeed, resetSeededData } from "../seeders/seedDb.mjs";
import accountsRouter from "./router/accountsRouter.mjs";
import customersRouter from "./router/customersRouter.mjs";
import transactionsRouter from "./router/transactionsRouter.mjs";

// App
const app = express();
const port = 3000;
app.use(express.json());

resetSeededData();

// Middleware

// Routes
app.get("/", (req, res) => {
  res.send("Hello, welcome to the Bank API for Introduction to React!");
});

app.use("/customers", customersRouter);
app.use("/accounts", accountsRouter);
app.use("/transactions", transactionsRouter);

export const startServer = () => {
  try {
    app.listen(port, () => {
      console.log(`Now listening on http://localhost:${port}/`);
    });
  } catch (e) {
    console.error(e);
  }
};

app.use((req, res, next) => {
  next(createError(404));
});
