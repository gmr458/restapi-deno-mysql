import { RouterContext } from "https://deno.land/x/oak/router.ts";
import { update } from "../respository/user.ts";
import { findById } from "../libs/doesUserExist.ts";

export const updateUser = async (ctx: RouterContext) => {
  try {
    const { id } = ctx.params;
    const userExists = await findById(id);
    if (userExists) {
      const body = ctx.request.body();
      const { name, country } = await body.value;
      if (name && country) {
        ctx.response.status = 200;
        ctx.response.body = await update(id, name, country);
      } else {
        ctx.response.status = 400;
        ctx.response.body = { message: "Invalid request" };
      }
    } else {
      ctx.response.status = 404;
      ctx.response.body = {
        message: "User not found",
      };
    }
  } catch (error) {
    console.error(error);
  }
};
