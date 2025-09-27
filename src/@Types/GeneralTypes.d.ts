

export type ImagesIconsFilesProps =
| "dashboardWhite"
| "pendingWhite"

export type IconsProps={
  img:ImagesIconsFilesProps;
  onPress?: (e: any) => void;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  toolTipTitle?: string;
  placement?: TooltipProps.placement;
}