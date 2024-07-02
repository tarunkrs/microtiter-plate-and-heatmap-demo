import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import TooltipFormatter from "./TooltipFormatter";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function TooltipComponent(props) {
  return (
    <>
      <BootstrapTooltip title={<TooltipFormatter rows={props.rows} selectedMetric={props.selectedMetric} />}>
        {props.content}
      </BootstrapTooltip>
    </>
  );
}
