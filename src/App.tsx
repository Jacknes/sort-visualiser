import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Graph from "./Graph";
import Toolbar from "./Toolbar";

const App: React.FC = () => {
  const [randomArr, setRandomArr] = useState<
    { value: number; active: false }[]
  >([]);
  const [numberOfItems, setNumberOfItems] = useState(39);

  useEffect(() => {
    const emptyArr = [...Array(numberOfItems)];
    setRandomArr(
      emptyArr.map(i => {
        const value = generateRandomNumber();
        return { value: value, active: false };
      })
    );
  }, []);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 99 + 1);
  };

  return (
    <Root>
      <Graph arr={randomArr} />
      <Toolbar />
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
