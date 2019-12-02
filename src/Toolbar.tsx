import React from "react";
import styled from "styled-components";

const Toolbar = () => {
  return <Root>THis is the toolbar</Root>;
};

const Root = styled.div`
  background-color: #393e41;
  min-height: 10vh;
  width: 100%;
  font-family: "Courier New", Courier, monospace;
  color: white;
  justify-content: center;
  padding: 8px;
`;

export default Toolbar;
