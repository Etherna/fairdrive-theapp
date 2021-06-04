import { makeStyles, createStyles } from "@material-ui/styles";
// import interface for component Props and Theme
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./buttonLink";

const size = {
  large:"55rem",
  medium:"40rem",
  small:"20rem"
}
const useStyles = makeStyles(() =>
  createStyles({
    ButtonLink: {
      // we merge Props & Theme interfaces and call this merged object "style".
      //component props and ui theme properties are available on the style object (yay auto-complete!!).
      fontSize: '16px',
      letterSpacing: '0',
      lineHeight: '19px',
      // custom
      minWidth: "40rem",
      maxWidth: "55rem",
      textAlign: 'center',
      boxSizing: 'border-box',
      padding: "20px 42px",
      borderRadius: "4px",
      cursor: 'pointer',
      border: "1px solid var(--dark3)", 
      backgroundColor: (style: Props & Theme) => style.backgroundLight3,
      color:(style: Props & Theme) => style.textColorPrimary,
      font: (style: Props & Theme) => style.typography.h6,
      "&:hover": {
        font: (style: Props & Theme) => style.typography.h5,
      },
      "&:active": {
        font: (style: Props & Theme) => style.typography.h4,
        border: "1px solid var(--white)", 
      },
      textTransform: 'capitalize',
    },
  })
);

export default useStyles;
