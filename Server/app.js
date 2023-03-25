import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "25MB",
  })
);

app.use(express.urlencoded({extended:true}));

import user from "./server/Router/userRouter.js";

app.use("/user", user)

export default app;
