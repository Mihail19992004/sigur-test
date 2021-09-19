import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// Написание хука для стилизации material-ui компонента
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: "40px",
    color: "#2F4F4F",
  },
}));
// Создание компонента Header
export const Header = () => {
  // Импорт стилей для кастомного компонента из хука
  const styles = useStyles();

  return (
    <Typography className={styles.root} component="h1" variant="h5">
      Sigur Form Test
    </Typography>
  );
};
