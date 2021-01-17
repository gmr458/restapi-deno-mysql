import { RouterContext } from "https://deno.land/x/oak/router.ts";
import { search } from "../respository/user.ts";

export const getAllUsers = async (ctx: RouterContext) => {
  try {
    const result = await search();
    ctx.response.body = result.rows;
  } catch (error) {
    console.error(error);
  }
};
