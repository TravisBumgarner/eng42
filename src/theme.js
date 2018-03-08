import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const PRIMARY_COLOR = '#000000';
export const SECONDARY_COLOR = '#FFFFFF';
export const TERTIARY_COLOR = '#999';

export const FONT_SMALL = '0.8rem';
export const FONT_NORMAL = '1rem';
export const FONT_LARGE = '1.5rem';
export const FONT_XLARGE = '3rem';

export const FONT_HEADER = "font-family: 'Montserrat', sans-serif";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc
}, {});

export const muiTheme = getMuiTheme({
  palette: {
    textColor: `${PRIMARY_COLOR}`,
  },
});