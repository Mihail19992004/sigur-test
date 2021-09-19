import React, { FC, ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
// Написание хука для стилизации material-ui компонента
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));
// Создание кастомного компонента material-ui
export const Form = ({ children, ...props }: any) => {
  // Импорт стилей для кастомного компонента из хука
  const styles = useStyles();

  return (
    <form {...props} className={styles.root} noValidate>
      {children}
    </form>
  );
};
