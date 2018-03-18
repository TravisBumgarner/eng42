import styled from 'styled-components';

import {
  PRIMARY_COLOR,
  TERTIARY_COLOR
} from "../../theme";

const PhotoThumbnailWrapper = styled.a`
`;

const Image = styled.img`
  max-height: 100px;
  border: 2px solid ${ PRIMARY_COLOR };
  margin: 5px;  
  
  &:hover{
    border-color: ${ TERTIARY_COLOR };
    cursor: pointer;
  }
`;

export {
  PhotoThumbnailWrapper,
  Image,
};

