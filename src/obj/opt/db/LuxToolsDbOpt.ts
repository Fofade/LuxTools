import { LuxToolsDB } from "@/obj/model/db/LuxToolsDB";

const db1: LuxToolsDB = new LuxToolsDB("1");

/**
 * 获取db连接对象
 * @returns
 */
export function GetDbConnect(): LuxToolsDB {
  return db1;
}
