import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// Написание хука для стилизации material-ui компонента
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));
//Создание компонента кнопки
export const PrimaryButton = ({ children, ...props }: any) => {
  const styles = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
};
