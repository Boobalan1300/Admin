import { DecryptData, EncryptData } from "../../Utility/GeneralFucntions";


export function setCookie(
  cname: string,
  cvalue: string | object | null,
  exdays: number = 7
) {
  const storedValue =
    typeof cvalue === "string"
      ? EncryptData(cvalue)
      : EncryptData(JSON.stringify(cvalue));
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + storedValue + ";" + expires + ";path=/";
}

const isJsonString = (value: any) => {
  try {
    return JSON.parse(value);
  } catch {
    return false;
  }
};

export function getCookie(cname: string) {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      const val = DecryptData(c.substring(name.length, c.length));
      return isJsonString(val) ? isJsonString(val) : val;
    }
  }
  return "";
}
