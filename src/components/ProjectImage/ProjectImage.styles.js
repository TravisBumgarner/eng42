import styled from 'styled-components';

const ProjectImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  margin: 20px 0;
  height: 500px;
  flex-grow: 0;
`;

const Image = styled.img`
  max-height: 500px;
  align-self: center;
  max-width: 100%;
`;

export {
  ProjectImageWrapper,
  Image,
};

