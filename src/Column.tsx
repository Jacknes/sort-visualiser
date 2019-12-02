import React from "react";
import styled from "styled-components";

type Props = {
  value: number;
  numberOfColumns: number;
  active?: boolean;
};

const Column: React.FC<Props> = ({ value, numberOfColumns }) => {
  return (
    <Root value={value} numberOfColumns={numberOfColumns}>
      <Value>{numberOfColumns > 25 ? "" : value}</Value>
    </Root>
  );
};

const Root = styled.div<{ value: number; numberOfColumns: number }>`
  display: flex;
  flex: 1 1 auto;
  min-height: ${p => p.value - 15}vh;
  max-width: ${p => 90 / p.numberOfColumns - 1}vw;
  background-color: #c7eae4;
  border-radius: 16px 16px 0 0;
  justify-content: center;
  align-items: flex-end;
  padding: 8px 0;
`;

const Value = styled.span`
  font-family: "Courier New", Courier, monospace;
`;

export default Column;
