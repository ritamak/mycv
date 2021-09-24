// The way I found to change background of the body with react.context for the dark/light mode

import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export default ContentContainer;
