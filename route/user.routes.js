import express from "express";
import { tambahuser, login, getAllUsers, cariuserByID } from "../controllers/user.controllers.js";
import { authenticateToken } from "../middleware/VerifyTokens.js";
const routerUser = express.Router();
routerUser.post("/", tambahuser);
routerUser.post("/login", login);
routerUser.get("/list", getAllUsers);
routerUser.get("/:id", cariuserByID);
routerUser.get("/dashboard", authenticateToken, (req, res) => {
  res.send("Welcome to the dashboard!");
});
export default routerUser;
