import styled from 'styled-components';
import Snackbar from 'material-ui/Snackbar';

import {
  FONT_FAMILY_HEADER,
} from "../../theme";

const AppWrapper = styled.div`
`;

const Popup = styled(Snackbar)`
  z-index:1000;
`;

const ErrorMsg = styled.h2`
  margin: 0 0 5px 0;
  font-family: ${FONT_FAMILY_HEADER};
`;

const LoadingWrapper = styled.div`
  width: 40vw;
  margin:0px auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  AppWrapper,
  LoadingWrapper,
  Popup,
  ErrorMsg,
}