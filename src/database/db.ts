import { Client } from "https://deno.land/x/mysql/mod.ts";

let hostDB = Deno.env.get("HOST_DB");
let portDB = Deno.env.get("PORT_DB");
let userDB = Deno.env.get("USER_DB");
let passwordDB = Deno.env.get("PASSWORD_DB");
let nameDB = Deno.env.get("NAME_DB");

if (!hostDB) {
  hostDB = "127.0.0.1";
}

if (!portDB) {
  portDB = "3306";
}

if (!userDB) {
  userDB = "root";
}

if (!passwordDB) {
  passwordDB = "password";
}

if (!nameDB) {
  nameDB = "dbusers";
}

const client = await new Client().connect({
  hostname: hostDB,
  port: parseInt(portDB),
  username: userDB,
  password: passwordDB,
  db: nameDB,
});

export default client;
