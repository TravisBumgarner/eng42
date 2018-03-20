import styled from 'styled-components';
import Snackbar from 'material-ui/Snackbar';

const AppWrapper = styled.div`
`;

const Popup = styled(Snackbar)`
  z-index:1000;
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
}