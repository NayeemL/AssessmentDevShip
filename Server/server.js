import app from "./app.js";
import mongoose from "mongoose";
import { config } from "dotenv";

mongoose.set('strictQuery', true);

const { connect } = mongoose;

config({
  path: "./.env",
});

const database = process.env.DATABASE;

const port = process.env.PORT;

connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then((res) => {
  console.log("DB Connected");
});

app.listen(port, () => {
  console.log("Connected");
});