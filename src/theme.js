import getMuiTheme from 'material-ui/styles/getMuiTheme';
import styled, { css } from 'styled-components';

// ============================================= //
// == Constants ================================ //
// ============================================= //

// Colors
export const PRIMARY_COLOR = '#000000';
export const SECONDARY_COLOR = '#FFFFFF';
export const TERTIARY_COLOR = '#4acfa0';

// Font Sizes
export const FONT_SMALL = '0.8rem';
export const FONT_NORMAL = '1rem';
export const FONT_NORMAL_LINE_HEIGHT = '1.4';;
export const FONT_LARGE = '1.5rem';
export const FONT_XLARGE = '3rem';

// Font Families
export const FONT_HEADER = "'Montserrat', sans-serif";
export const FONT_CONTENT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export const HEADER_HEIGHT = `50px`;
export const FOOTER_HEIGHT = `50px`;
export const BODY_HEIGHT = `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT}))`;

// Misc
export const SCREEN_WIDTHS = {
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 376,
};

// ============================================= //
// == Styled Components ======================== //
// ============================================= //

// Media Queries
export const media = Object.keys(SCREEN_WIDTHS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${SCREEN_WIDTHS[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc
}, {});

// Shared Styles
export const DEFAULT_PAGE_WRAPPER = styled.div`
  width: 75%;
  max-width: 1024px;
  margin: 20vh auto 0;
  color: ${PRIMARY_COLOR};
  background-color: ${SECONDARY_COLOR};
  font-family: ${FONT_CONTENT};
  height: 100vh;
  position: relative;
  height: 100vh;
  overflow: hidden;
  
  ${media.DESKTOP`
    max-width: 95%;
    width: 95%;
  `}
`;

// ============================================= //
// == Material UI  ============================= //
// ============================================= //

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

