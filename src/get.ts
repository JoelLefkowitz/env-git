import { gitDirty, gitHash, isGit } from "./cmd";
import { setDefault, stdout } from "./utils";

export function getIsGit(): boolean {
  try {
    return stdout(isGit) === "true";
  } catch (err) {
    return false;
  }
}

export function getGitHash(): string {
  return setDefault("GIT_HASH", getIsGit() ? stdout(gitHash) : "NO_HASH");
}

export function getGitDirty(): boolean {
  return setDefault("GIT_DIRTY", getIsGit() ? stdout(gitDirty) : "") !== "";
}
