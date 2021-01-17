import { RouterContext } from "https://deno.land/x/oak/router.ts";
import { search } from "../respository/user.ts";
import { findById } from "../libs/doesUserExist.ts";

export const getUser = async (ctx: RouterContext) => {
  try {
    const { id } = ctx.params;
    const userExists = await findById(id);
    if (userExists) {
      const result = await search(id);
      ctx.response.status = 200;
      ctx.response.body = result.rows;
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
