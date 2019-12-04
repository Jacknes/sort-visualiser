import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  value: number;
  onChange(value: number): void;
};

const Slider: React.FC<Props> = ({ value, onChange }) => {
  const [sliderVal, setSliderVal] = useState(value);

  useEffect(() => {
    setSliderVal(value);
  }, [value]);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(event.target.value);
    setSliderVal(val);
    onChange(val);
  };
  return (
    <Root>
      <ValueText>Number of Items: {sliderVal}</ValueText>
      <SliderEl
        type="range"
        min="10"
        max="60"
        value={sliderVal}
        onChange={handleOnChange}
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  margin-left: auto;
`;

const SliderEl = styled.input`
  -webkit-appearance: none;
  /* width: 100%; */
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    /* background: #4caf50; */
    background: #5efc8d;
    cursor: pointer;
  }
`;

const ValueText = styled.span`
  margin-right: 8px;
`;

export default Slider;
