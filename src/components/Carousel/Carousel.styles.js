import styled from 'styled-components';

import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

import {
  TERTIARY_COLOR,
  media,
} from '../../theme'

const ICON_SIZE = 50;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  margin: 20px 0;
  height: 500px;
  flex-grow: 0;
  position: relative;
`;

const PrevButton = styled(FaAngleLeft)`
  position: absolute;
  top:50%;
  left: -50px;
  z-index: 999;
  
  ${media.TABLET`
    left: 0px;
  `}
  
  &:hover{
    fill: ${TERTIARY_COLOR};
    cursor: pointer;
  }
`;

const NextButton = styled(FaAngleRight)`
  position: absolute;
  top:50%;
  right: -50px;
  z-index: 999;
    
  ${media.TABLET`
    right: 0px;
  `}
  
  &:hover{
    fill: ${TERTIARY_COLOR};
    cursor: pointer;
  }
`;

const ActiveImage = styled.img`
  max-height: 500px;
  align-self: center;
  max-width: 100%;
`;

export {
  CarouselWrapper,
  ActiveImage,
  NextButton,
  PrevButton,
  ICON_SIZE,
};

