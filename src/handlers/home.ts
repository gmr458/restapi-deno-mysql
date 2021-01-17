import { RouterContext } from "https://deno.land/x/oak/router.ts";

export const home = (ctx: RouterContext) => {
  ctx.response.body = { message: "Welcome" };
};
