import React from "react";
import styled from "styled-components";

import Column from "./Column";

type Props = {
  arr: { value: number; active: false }[];
};

const Graph: React.FC<Props> = ({ arr }) => {
  return (
    <Root>
      <Columns>
        {arr.map(item => {
          return <Column hideLabel={arr.length > 25} value={item.value} />;
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
`;

export default Graph;
