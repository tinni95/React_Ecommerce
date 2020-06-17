import styled, { css } from "styled-components";

const getBackgroundImage = (props) => {
  return css`
    background: url('${props.imageUrl}');
  `;
};

const getSize = (props) => {
  console.log(props);
  return props.size == "large"
    ? css`
        height: 900px;
      `
    : css`
        height: 600px;
      `;
};

export const MenuItemContainer = styled.div`
  ${getSize}
  min-width: 50%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    min-width: 100%;
    height: 400px;
  }
`;

export const BackgroundImage = styled.div`
  ${getBackgroundImage}
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 24px;
  color: white;
`;

export const StyledContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
