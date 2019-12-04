import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import Graph from "./Graph";
import Toolbar from "./Toolbar";

const App: React.FC = () => {
  const [randomArr, setRandomArr] = useState<
    { key: number; value: number; active: boolean }[]
  >([]);
  const [numberOfItems, setNumberOfItems] = useState(30);

  console.log("randomArr after initial render", randomArr);
  useEffect(() => {
    if (randomArr.length === 0) {
      let emptyArr = [...Array(numberOfItems)];
      emptyArr = emptyArr.map((i, key) => {
        const value = generateRandomNumber();
        return { key: key, value: value, active: false };
      });
      console.log("emptyArr", emptyArr);
      setRandomArr(emptyArr);
    } else {
      const resizeArray = changeSizeOfArray();
      setRandomArr(resizeArray);
    }
  }, [numberOfItems]);

  console.log("randomArr", randomArr);

  const changeSizeOfArray = (): {
    key: number;
    value: number;
    active: boolean;
  }[] => {
    let arr = [];
    arr = [...Array(numberOfItems)];
    if (numberOfItems < randomArr.length) {
      arr = arr.map((val, i) => {
        return randomArr[i];
      });
    } else {
      arr = arr.map((val, i) => {
        if (randomArr.length > i) {
          return randomArr[i];
        }
        const value = generateRandomNumber();
        return { key: i, value: value, active: false };
      });
    }
    console.log("resized array", arr);
    return arr;
  };

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
