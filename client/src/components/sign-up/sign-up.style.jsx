import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 800px) {
    width: 420px;
    margin-top: 20px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
