import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// Написание хука для стилизации material-ui компонента
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
//Создание контейнера
export const MainContainer = ({ children, ...props }: any) => {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      component="main"
      maxWidth="xs"
      {...props}
    >
      {children}
    </Container>
  );
};
