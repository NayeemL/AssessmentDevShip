import UserDb from "../model/userModel.js";
import { generateToken } from "../middleware/userAuth.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res, next) {
  try {
    const data = req.body;
    const salt = await bcrypt.genSaltSync(10);
    const password = await data.password;
    const cnfPassword = await data.cnfPassword;
    const existUser = await UserDb.findOne({ email: data.email });
    const details = {
      firstName: data.firstName,
      lastName:data.lastName,
      email:data.email,
      userName:data.userName,
      password: bcrypt.hashSync(password, salt),
      cnfPassword: bcrypt.hashSync(cnfPassword, salt),
    };
    if (existUser) {
      res.status(409).json({
        message: "user already exist",  
        data: existUser,
      });
    } else {
      
      const createUser = await UserDb.create(details);
      await UserDb.create({
        firstName: data.firstName,
        lastName:data.lastName,
        email:data.email,
        userName:data.userName,
        password:data.password,
        cnfPassword:data.cnfPassword,
        userId: createUser._id,
      });
      res.status(201).json({
        message: "User Created Successfully",
        data: createUser,
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}

export async function userLogin(req, res, next) {
  try {
    const data = req.body;
    const existUser = await UserDb.findOne({
      email: data.email,
    });
    console.log("existUser", existUser);

    if (existUser) {
      bcrypt
        .compare(data.password, existUser.password)
        .then((checkPassword) => {
          if (checkPassword) {
            generateToken({ email: existUser.email }).then((token) => {
              res.status(200).json({
                message: "user login successfully",
                data: existUser,
                token: token,
                status: "Successful",
              });
            });
          } else {
            res.status(400).json({
              message: "password not matched",
              status: "Failed",
            });
          }
        });
    } else {
      res.status(400).json({
        message: "user not found",
        status: "failed",
      });
    }
  } catch (err) {
    console.log(err);
    next();
  }
}