import { TextField } from "@mui/material";
import React from "react";

interface inputprops {
  variant: "outlined" | "standard" | "filled";
  label: string;
  size: "small" | "medium";
}

export const Input = (props: inputprops) => {
  return (
    <>
      <TextField
        variant={props.variant}
        size={props.size}
        label={props.label}
        fullWidth
      />
    </>
  );
};
