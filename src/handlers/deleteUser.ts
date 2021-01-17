import { RouterContext } from "https://deno.land/x/oak/router.ts";
import { remove } from "../respository/user.ts";
import { findById } from "../libs/doesUserExist.ts";

export const deleteUser = async (ctx: RouterContext) => {
  try {
    const { id } = ctx.params;
    const userExists = await findById(id);
    if (userExists) {
      ctx.response.status = 200;
      ctx.response.body = await remove(id);
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
