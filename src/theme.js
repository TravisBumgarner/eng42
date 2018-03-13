import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { css } from 'styled-components';

export const PRIMARY_COLOR = '#000000';
export const SECONDARY_COLOR = '#FFFFFF';
export const TERTIARY_COLOR = '#4acfa0';


export const FONT_SMALL = '0.8rem';
export const FONT_NORMAL = '1rem';
export const FONT_NORMAL_LINE_HEIGHT = '1.4';;
export const FONT_LARGE = '1.5rem';
export const FONT_XLARGE = '3rem';

export const FONT_HEADER = "'Montserrat', sans-serif";
export const FONT_CONTENT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export const HEADER_HEIGHT = `50px`;
export const FOOTER_HEIGHT = `50px`;
export const BODY_HEIGHT = `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT}))`;

export const SCREEN_WIDTHS = {
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 376,
};

export const media = Object.keys(SCREEN_WIDTHS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${SCREEN_WIDTHS[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc
}, {});

export const muiTheme = getMuiTheme({
  palette: {
    textColor: `${PRIMARY_COLOR}`,
    fontFamily: `${FONT_CONTENT}`,
    primary1Color: `${TERTIARY_COLOR}`,
    primary2Color: `${TERTIARY_COLOR}`,
    primary3Color: `${TERTIARY_COLOR}`,
    accent1Color: `${TERTIARY_COLOR}`,
    accent2Color: `${TERTIARY_COLOR}`,
    accent3Color: `${TERTIARY_COLOR}`,
  },
});