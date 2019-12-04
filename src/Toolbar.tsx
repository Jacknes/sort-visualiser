import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

type Props = {
  numberOfItems: number;
  onChangeNumber(value: number): void;
};
const Toolbar: React.FC<Props> = ({ numberOfItems, onChangeNumber }) => {
  const handleClick = () => {
    onChangeNumber(numberOfItems + 1);
  };
  return (
    <Root>
      <Title>Sorting Algorithms Visualised</Title>
      {/* <button onClick={handleClick} /> */}
      <Slider value={numberOfItems} onChange={onChangeNumber} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex: 1;
  border-top: 2px solid #393e41;
  /* background-color: #393e41; */
  background-color: black;
  min-height: 10vh;
  /* width: 100vw; */
  font-family: "Courier New", Courier, monospace;
  color: white;
  align-items: center;
  padding: 8px 16px;
`;

const Title = styled.span``;

export default Toolbar;
