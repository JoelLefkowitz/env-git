(()=>{"use strict";var t={806:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.gitDirty=e.gitHash=e.isGit=void 0,e.isGit="git rev-parse --is-inside-work-tree",e.gitHash="git rev-parse --short HEAD",e.gitDirty="git diff --shortstat"},51:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getGitDirty=e.getGitHash=e.getIsGit=void 0;const r=i(806),s=i(593);function o(){try{return"true"===s.stdout(r.isGit)}catch(t){return!1}}e.getIsGit=o,e.getGitHash=function(){return s.setDefault("GIT_HASH",o()?s.stdout(r.gitHash):"NO_HASH")},e.getGitDirty=function(){return""!==s.setDefault("GIT_DIRTY",o()?s.stdout(r.gitDirty):"")}},519:function(t,e,i){var r=this&&this.__createBinding||(Object.create?function(t,e,i,r){void 0===r&&(r=i),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]}),s=this&&this.__exportStar||function(t,e){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(e,i)||r(e,t,i)};Object.defineProperty(e,"__esModule",{value:!0}),s(i(51),e),s(i(241),e),s(i(519),e),s(i(593),e)},241:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.setReactGitDirty=e.setReactGitHash=e.setGitDirty=e.setGitHash=void 0;const r=i(51);e.setGitHash=function(){process.env.GIT_HASH=r.getGitHash()},e.setGitDirty=function(){process.env.GIT_DIRTY=r.getGitDirty().toString()},e.setReactGitHash=function(){process.env.REACT_APP_GIT_HASH=r.getGitHash()},e.setReactGitDirty=function(){process.env.REACT_APP_GIT_DIRTY=r.getGitDirty().toString()}},593:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.setDefault=e.stdout=void 0;const r=i(129);e.stdout=function(t){return r.execSync(t).toString().trim()},e.setDefault=function(t,e){return console.log(t,e,"undefined"!==process.env[t],process.env[t]),"undefined"!==process.env[t]?process.env[t]:e}},129:t=>{t.exports=require("child_process")}},e={},i=function i(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,i),o.exports}(519),r=exports;for(var s in i)r[s]=i[s];i.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();