import { Router } from "express";
const router = Router();

import { createUser, userLogin } from "../controller/userController.js";

router.route("/registerUser").post(createUser);
router.route("/registerUser_login").post(userLogin);

export default router;
