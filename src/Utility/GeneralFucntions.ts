import CryptoJS from "crypto-js";
import sha1 from "sha1";

export const getEncrypt_Decrypt_Key = () => {
  return sha1("Narasus");
};

// Encrypt Data
export const EncryptData = (data: string) => {
  return CryptoJS.AES.encrypt(data, getEncrypt_Decrypt_Key()).toString();
};

// Decrypt Data
export const DecryptData = (encryptedText: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, getEncrypt_Decrypt_Key());
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedData) {
      throw new Error("Decryption failed. Invalid key or corrupted data.");
    }

    return decryptedData;
  } catch  {
    return null; 
  }
};
