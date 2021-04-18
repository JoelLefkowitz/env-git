import * as proc from "child_process";

export function stdout(exec: string): string {
  return proc.execSync(exec).toString().trim();
}

export function setDefault(key: string, def: string): string {
  return process.env[key] !== "undefined" ? process.env[key] : def;
}
