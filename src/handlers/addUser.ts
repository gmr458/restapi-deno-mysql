import { RouterContext } from "https://deno.land/x/oak/router.ts";
import { insert } from "../respository/user.ts";

export const addUser = async (ctx: RouterContext) => {
  try {
    const body = ctx.request.body();
    const user = await body.value;
    if (user.name && user.country) {
      ctx.response.status = 200;
      ctx.response.body = await insert(user);
    } else {
      ctx.response.status = 400;
      ctx.response.body = { message: "Invalid request" };
    }
  } catch (error) {
    console.error(error);
  }
};
