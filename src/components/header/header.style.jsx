import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const JelloAnimation = css`
  @keyframes jello {
    11.1% {
      transform: none;
    }
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }
    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
    100% {
      transform: none;
    }
  }
`;

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 25px;
  margin-left: 20px;
  ${JelloAnimation}
  &:hover {
    animation: jello 2s;
    transform-origin: center;
  }
`;

export const OptionContainer = styled.div`
  padding: 50px;
  width: 50%;
  height: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
