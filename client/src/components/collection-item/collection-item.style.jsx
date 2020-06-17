import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  width: 31%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  height: 650px;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
    height: 300px;
    margin-top: 20px;
  }
`;

export const CollectionItemImage = styled.div`
  transition-delay: 1s;
  transition: all 0.2s linear;
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
`;

export const CollectionItemName = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const CollectionItemPrice = styled.div`
  font-size: 15px;
  width: 100%;
`;
