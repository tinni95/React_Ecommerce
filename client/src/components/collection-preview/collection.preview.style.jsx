import styled from "styled-components";

export const CollectionsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 25px;
  margin-left: 25px;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    width: 100%;
  }
`;
