import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
//Создание кастомного компонента для input
export const Input = forwardRef((props: any, ref) => {
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
