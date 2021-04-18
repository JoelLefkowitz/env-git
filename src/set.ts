import { getGitDirty, getGitHash } from "./get";

export function setGitHash(): void {
  process.env.GIT_HASH = getGitHash();
}

export function setGitDirty(): void {
  process.env.GIT_DIRTY = getGitDirty().toString();
}

export function setReactGitHash(): void {
  process.env.REACT_APP_GIT_HASH = getGitHash();
}

export function setReactGitDirty(): void {
  process.env.REACT_APP_GIT_DIRTY = getGitDirty().toString();
}
