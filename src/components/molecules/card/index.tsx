import React from "react";
import { Stack } from "@mui/system";
import Coin from "../coin";
import Price from "../price";
import { Card as MuiCard } from "@mui/material";

type cardProps = {
  coinSrc?: string;
  coinName?: string;
  coinAbbr?: string;
  currency?: string|number;
  percentage?: string;
  color?: string;
  hasSingleText?: boolean;
  textColor?:string,
  bgColor?:string,
  hasBgColor?:boolean,
};

const Card = (props: cardProps) => {
  return (
    <div>
      <MuiCard elevation={1} sx={{ width: "28vw", px: 2, my: 2 }}>
        <Stack
          display={"flex"}
          flexDirection="row"
          justifyContent="space-between"
          alignItems={'center'}
        >
          <Coin
            coinSrc={props.coinSrc}
            coinName={props.coinName}
            coinAbbr={props.coinAbbr}
            hasBgColor={props.hasBgColor}
            bgColor='#E8E8F7'
            textColor="#4B4B60"
          />
          <Price
            currency={props.currency}
            percentage={props.percentage}
            color={props.color}
            hasSingleText={props.hasSingleText}
          />
        </Stack>
      </MuiCard>
    </div>
  );
};

export default Card;
