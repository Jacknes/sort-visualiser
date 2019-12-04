import React from "react";
import styled from "styled-components";

import Column from "./Column";

type Props = {
  arr: { key: number; value: number; active: boolean }[];
};

const Graph: React.FC<Props> = ({ arr }) => {
  return (
    <Root>
      <Columns>
        {arr.map(item => {
          return (
            <Column
              key={item.key.toString()}
              numberOfColumns={arr.length}
              value={item.value}
            />
          );
        })}
      </Columns>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 90vh;
  width: 100vw;
`;

const Columns = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  /* justify-content: flex-start; */
  /* justify-content: space-evenly; */
  transition: all 2000ms linear;
`;

export default Graph;
