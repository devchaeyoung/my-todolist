import { atom } from "recoil";

const userProfile = atom({
  key: "USER_PROFILE",
  default: defaultValue(),
});

function defaultValue() {
  const storageData = localStorage.getItme("userprofile") || {};
  return JSON.parse(storageData);
}
