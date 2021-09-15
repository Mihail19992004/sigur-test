import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

export const Input = forwardRef<any>((props, ref: any) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
