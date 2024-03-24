import { atom } from "recoil";

const userProfileState = atom({
  key: "USER_PROFILE",
  default: defaultValue(),
});

function defaultValue() {
  const storageData = localStorage.getItem("userprofile");
  if (!storageData) {
    return {
      id: 1,
      name: "",
    };
  }
  return JSON.parse(storageData);
}

export default userProfileState;
