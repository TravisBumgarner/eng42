import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { FONT_XLARGE, FONT_LARGE } from "../../theme";

const ASPECT_RATIO = 300 / 336; // width / height
const WIDTH = 50; // vh

const HomeWrapper = styled.div`
  height: 80vh;
  position: relative;
`;

const FirstName = styled.h1`
  font-size: ${FONT_XLARGE};
  color: deepskyblue;
  position: absolute;
  bottom: 0;
  right: 1rem;
`;

const LastName = FirstName.extend`
  bottom: -${FONT_XLARGE};
`;

const MyPortrait = styled.img`
  width: ${WIDTH}vh;
  height: ${WIDTH / ASPECT_RATIO}vh;
`;

const NameImgWrapper = styled.div`
  position: relative;
  width: ${WIDTH}vh;
  height: ${WIDTH / ASPECT_RATIO}vh;
`;

const ContentWrapper = styled.div`
  margin:0px auto;
  width: ${WIDTH}vh;
`;

const RoutesList = styled.ul`
  list-style-type: none;
  margin: ${FONT_XLARGE} 0 0 0;
  padding: 0;
  width: 150px;
  z-index:10;
`;

const ListItem = styled.li`

`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: #ce03a5;
  font-size: ${FONT_LARGE};
`;

export {
  RoutesList,
  ListItem,
  ItemLink,
  HomeWrapper,
  ContentWrapper,
  FirstName,
  LastName,
  MyPortrait,
  NameImgWrapper,
}

