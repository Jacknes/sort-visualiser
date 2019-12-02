import React from "react";
import styled from "styled-components";

type Props = {
  value: number;
  hideLabel: boolean;
  active?: boolean;
};

const Column: React.FC<Props> = ({ value, hideLabel }) => {
  return (
    <Root value={value}>
      <Value>{hideLabel ? "" : value}</Value>
    </Root>
  );
};

const Root = styled.div<{ value: number }>`
  display: flex;
  flex: 1;
  min-height: ${p => p.value - 15}vh;
  background-color: #c7eae4;
  /* margin-left: 24px; */
  border-radius: 16px 16px 0 0;
  justify-content: center;
  align-items: flex-end;
  padding: 8px 0;
`;

const Value = styled.span`
  font-family: "Courier New", Courier, monospace;
`;

export default Column;
