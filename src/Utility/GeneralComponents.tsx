import { styled, Tooltip, tooltipClasses,type TooltipProps } from "@mui/material";


export const CustomTooltip = styled(
  ({ className, ...props }: TooltipProps & { className?: string }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: theme.palette.common.white,
    backgroundColor: "var(--menuPrimary)",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 16,
    fontWeight: 600,
  },
}));
