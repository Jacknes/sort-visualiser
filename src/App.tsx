import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import Graph from "./Graph";
import Toolbar from "./Toolbar";

const App: React.FC = () => {
  const [randomArr, setRandomArr] = useState<
    { key: number; value: number; active: false }[]
  >([]);
  const [numberOfItems, setNumberOfItems] = useState(39);

  useEffect(() => {
    const emptyArr = [...Array(numberOfItems)];
    setRandomArr(
      emptyArr.map((i, key) => {
        const value = generateRandomNumber();
        return { key: key, value: value, active: false };
      })
    );
  }, [numberOfItems]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 99 + 1);
  };

  const _handleOnChangeNumber = (value: number) => {
    setNumberOfItems(value);
  };

  const handleOnChangeNumber = debounce(_handleOnChangeNumber, 300);

  return (
    <Root>
      <Graph arr={randomArr} />
      <Toolbar
        numberOfItems={numberOfItems}
        onChangeNumber={handleOnChangeNumber}
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: black;
`;

export default App;
