import { CallbackReturnType, Middleware, withTime, Request, Response } from "../Curie";
import { c_log } from "../Curie/helpers/log";
import { use } from "../Curie/@core";

@use()
export default class x extends Middleware {
  // @ts-ignore
  async intercept(req: Request, res: Response) {
    c_log(withTime(`[LOGGER]> ${req.method}: ${req.url || ""}`))
    return [null, true] as CallbackReturnType
  }
}