import styled from 'styled-components';

import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

import {
  TERTIARY_COLOR,
} from '../../theme'

const ICON_SIZE = 30;

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
  top:calc(50% - ${ICON_SIZE/2}px);
  left: 0px;
  z-index: 999;
  
  &:hover{
    fill: ${TERTIARY_COLOR};
    cursor: pointer;
  }
`;

const NextButton = styled(FaAngleRight)`
  position: absolute;
  top:calc(50% - ${ICON_SIZE/2}px);
  right: 0px;
  z-index: 999;
  
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

