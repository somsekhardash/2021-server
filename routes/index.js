import express from "express";
import path from "path";

var __dirname = path.resolve();
const { Router } = express;
import {
  getTournaments,
  tournamentRegister,
  tournamentDelete,
  updateTournamentUser,
  createMatch,
  updateMatch,
  deleteMatch,
} from "../controllers/DataController.js";
import { userLogin, userLogout } from "../controllers/AuthController.js";
import {
  createUser,
  updateUser,
  getUsers,
  UserDelete,
} from "../controllers/UserController.js";

const DIST_DIR = path.join(__dirname, "./../../ui/dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const router = Router();
// app.get("/", (_req, res) => {
//   res.sendFile(HTML_FILE);
// });

router.get("/", (_req, res) => {
  res.sendFile(HTML_FILE);
});

router.get("/get-tournaments", getTournaments);
router.post("/tournament-register", tournamentRegister);
router.delete("/delete-tournament", tournamentDelete);
router.post("/update-tournament-user", updateTournamentUser);

router.post("/create-match", createMatch);
router.post("/update-match", updateMatch);
router.delete("/delete-match", deleteMatch);

router.post("/create-user", createUser);
router.post("/update-user", updateUser);
router.get("/get-users", getUsers);
router.delete("/delete-user", UserDelete);

router.post("/login-user", userLogin);
router.post("/logout-user", userLogout);

export default router;
