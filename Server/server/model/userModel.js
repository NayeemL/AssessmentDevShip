import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Register = new Schema({
    firstName: String,
    lastName:String,
    email:String,
    userName:String,
    password:String,
    cnfPassword:String,
    userId: mongoose.Schema.Types.ObjectId,
});

Register.set("autoIndex", true);

const RegisterDb = model("register", Register);
RegisterDb.createIndexes();

export default RegisterDb;
