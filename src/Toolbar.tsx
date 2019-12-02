import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

type Props = {
  numberOfItems: number;
  onChangeNumber(value: number): void;
};
const Toolbar: React.FC<Props> = ({ numberOfItems, onChangeNumber }) => {
  return (
    <Root>
      <Title>Sorting Algorithms Visualised</Title>
      <Slider value={numberOfItems} onChange={onChangeNumber} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex: 1;
  background-color: #393e41;
  min-height: 10vh;
  /* width: 100vw; */
  font-family: "Courier New", Courier, monospace;
  color: white;
  align-items: center;
  padding: 8px 16px;
`;

const Title = styled.span``;

export default Toolbar;
