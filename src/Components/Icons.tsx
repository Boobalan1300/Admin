import type { IconsProps } from "../@Types/GeneralTypes";
import { CustomTooltip } from "../Utility/GeneralComponents";
import { ImagesIconsFiles } from "../Utility/ImagesIconsFiles";
import CustomStyledText from "./CustomStyledText";


export default function ICONS({
  img,
  onPress,
  height = 20,
  width = 20,
  style,
  toolTipTitle,
  placement,
}:IconsProps){
    const IMG = ImagesIconsFiles[img]||""
    return(
        <CustomTooltip
         placement={placement}
         title={toolTipTitle ? <CustomStyledText title={toolTipTitle} /> : ""}
        >  
        <img
        src={IMG}
        alt={"hidden"}
        width={width}
        height={height}
        style={{ ...style, cursor: "pointer" }}
        onClick={onPress}
      />
        </CustomTooltip>

    )
}