import { Router } from "https://deno.land/x/oak/mod.ts";

import { home } from "../handlers/home.ts";
import { getUser } from "../handlers/getUser.ts";
import { getAllUsers } from "../handlers/getAllUsers.ts";
import { addUser } from "../handlers/addUser.ts";
import { updateUser } from "../handlers/updateUser.ts";
import { deleteUser } from "../handlers/deleteUser.ts";

const router = new Router();

router
  .get("/", home)
  .get("/users", getAllUsers)
  .get("/user/:id", getUser)
  .post("/users", addUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

export default router;
