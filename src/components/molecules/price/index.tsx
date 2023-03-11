import { Grid } from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";

type priceProps = {
  currency?: string|number;
  percentage?: string;
  color?: string;
  hasSingleText?: boolean;
};

const Price = (props: priceProps) => {
  return (
    
      <Grid alignItems='center' justifyContent={'flex-end'}>
        <Typography>{props.currency}</Typography>
        {/* <Typography color={props.color}>{props.percentage}</Typography> */}
        <Grid justifyContent={'end'}>
        {!props.percentage ? (
          ""
        ) : (
          <Typography sx={{marginLeft: 'auto',textAlign:'end'}} color={props.color}>{props.percentage}</Typography>
        )}
        </Grid>
      </Grid>
  );
};

export default Price;
