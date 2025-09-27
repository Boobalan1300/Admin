// import emojiRegex from "emoji-regex";
// import { useState } from "react";


// const removeEmojis = (text: string) => {
//   const regex = emojiRegex();
//   return text.replace(regex, "");
// };


// export default function TextInputBox({
// countryPlaceholder,
// countryValue = null,
// disabled,
// errText,
// fontweight,
// fontsize,
// ifcheckBoxmargin,
// info,
// isActive = false,
// isActiveid,
// isBgColor,
// isChecked,
// isEndIcon,
// isRemoveZero,
// isShowCountry,
// isShowInputBorder = false,
// isPassword,
// maxLength = 50,
// minRows,
// multiline = false,
// onBlur,
// onChange,
// onChangeCheckBox,
// onChangeCountry,
// onInputChange,
// onPressActive,
// placeholder,
// required,
// subText,
// title,
// value,
// valueType,
// variant = "outlined",
// rows = 1,
// style
// }){

//   const [isSecure, setisSecure] = useState(false);

//    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const val = removeEmojis(event.target.value);
//     let finalVal = val;

//     // Remove Emojis using Unicode range filtering

//     switch (valueType) {
//       case "ALLCHAR":
//         finalVal = removeEmojis(
//           val.replace(/[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/? ]/g, "")
//         );
//         break;

//       case "ALPHANUMERIC":
//         finalVal = removeEmojis(val.replace(/[^A-Za-z0-9 ]/g, ""));
//         break;

//       case "ALPHA":
//         finalVal = removeEmojis(val.replace(/[^A-Za-z ]/g, ""));
//         break;

//       case "FLOAT":
//         finalVal = removeEmojis(val.replace(/[^0-9.]/g, ""));
//         break;

//       case "NUMERIC":
//         finalVal = removeEmojis(val.replace(/[^0-9]/g, ""));
//         finalVal = isRemoveZero && /^0+$/.test(finalVal) ? "" : finalVal;
//         break;
//       case "ALPHAWITHHYPENS":
//         finalVal = removeEmojis(val.replace(/[^A-Za-z-_ ]/g, ""));
//         break;
//       default:
//         break;
//     }
//     onChange(finalVal.replace(/^\s+/, ""));
//   };

//   const getType = () => {
//     if (isPassword) {
//       return isSecure ? "text" : "password";
//     }
//     return "text";
//   };


//     return(
//         <>
//         </>
//     )
// }