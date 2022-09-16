import * as React from "react";
import { styled } from "@mui/material/styles";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import { AiFillInfoCircle } from "react-icons/ai";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    placement="right"
    TransitionComponent={Zoom}
    enterDelay={100}
    leaveDelay={200}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function CustomizedTooltip({ header, desc, theme }) {
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">{header}</Typography>
          {desc}
        </React.Fragment>
      }
    >
      <ButtonUnstyled className={`tooltip ${theme}`} tabIndex={-1}>
        <AiFillInfoCircle theme={theme} />
      </ButtonUnstyled>
    </HtmlTooltip>
  );
}
