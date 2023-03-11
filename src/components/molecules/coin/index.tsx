import { Box, Grid, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../../themes";
import Avatars from "../../atoms/Avatar";
import Typography from "../../atoms/Typography";

type coinProps = {
  coinName?: string;
  coinAbbr?: string;
  coinSrc?: string;
  bgColor?: string;
  hasBgColor?: boolean;
  textColor?: string;
};

const Coin = (props: coinProps) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid display="flex" justifyContent="space-between" alignItems='center'>
          <Box display="flex" sx={{ width: "1rem" }} marginLeft={2}>
            <Avatars src={props.coinSrc} size="50" />
            <Box
              display="flex"
              flexDirection="column"
              marginLeft={2}
              marginRight={2}
            >
              <span>
                <Typography
                  variant="body1"
                  color={theme.palette.textColor.highEmphasis}
                >
                  {props.coinName}
                </Typography>
              </span>
              <span>
                <Typography
                  variant="caption2"
                  color={
                    props.hasBgColor
                      ? props.textColor
                      : theme.palette.textColor.mediumEmphasis
                  }
                  sx={{
                    padding: props.hasBgColor ? "2px 8px" : "0px",
                    backgroundColor: props.hasBgColor ? props.bgColor : "#FFFF",
                    borderRadius:props.hasBgColor?'10px':'0px'
                  }}
                >
                  {props.coinAbbr}
                </Typography>
              </span>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Coin;
