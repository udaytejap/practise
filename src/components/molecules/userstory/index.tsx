import React, { useState } from "react";
import Card from "../card";
import { Card as MuiCard, IconButton, Stack } from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import theme from "../../../themes";
import CoinList from "./data.json";

const ScrollableContainer = styled("div")({
  height: "200px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "12px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "10px",
    border: "3px solid #f1f1f1",
  },
});
const UserStory = () => {
  const totalBalance = CoinList.map((coin) =>
    parseFloat(coin.currency.replace(/[$,]/g, ""))
  ).reduce((acc, value) => acc + value, 0);
  const [activeIcon, setActiveIcon] = useState(0);
  const handleCircleIcon = () => {
    activeIcon == 1 ? setActiveIcon(0) : setActiveIcon(1);
  };
  const handleListIcon = () => {
    activeIcon == 2 ? setActiveIcon(0) : setActiveIcon(2);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ width: "29vw", marginLeft: "30px" }}
        >
          <Typography
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            My portfolio
          </Typography>
          <Stack
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            sx={{ marginLeft: "20px" }}
          >
            <IconButton onClick={() => handleListIcon()}>
              <Icon
                src={
                  activeIcon == 2
                    ? "./coins/activeIcons/list.svg"
                    : "./coins/list.svg"
                }
                style={{ width: "20px" }}
              />
            </IconButton>
            <IconButton onClick={() => handleCircleIcon()}>
              <Icon
                src={
                  activeIcon == 1
                    ? "./coins/activeIcons/circle.svg"
                    : "./coins/circle.svg"
                }
                style={{ width: "20px", marginRight: "10px" }}
              />
            </IconButton>
          </Stack>
        </Stack>
        <ScrollableContainer sx={{ width: "30vw" }}>
          <MuiCard sx={{ width: "29vw" }}>
            {CoinList.map((coin) => {
              return (
                <Card
                  key={coin.id}
                  coinSrc={coin.coinSrc}
                  coinName={coin.coinName}
                  coinAbbr={coin.coinAbbr}
                  currency={coin.currency}
                  percentage={coin.percentage}
                  color={coin.color}
                  hasBgColor={coin.hasBgColor}
                  hasSingleText={coin.hasSingleText}
                />
              );
            })}
          </MuiCard>
        </ScrollableContainer>

        <MuiCard
          elevation={1}
          sx={{
            width: "28vw",
            height: "6vh",
            px: 2,
            my: 2,
            py: 2,
          }}
        >
          <Stack
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography>Total Balance</Typography>
            <Typography>${totalBalance}</Typography>
          </Stack>
        </MuiCard>
      </ThemeProvider>
    </div>
  );
};

export default UserStory;
