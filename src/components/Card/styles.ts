import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2rem 3rem;
  min-height: fit-content;
  width: 300px;
  background: linear-gradient(
    to top right,
    var(--color-bg) 3%,
    #18203d 45%,
    var(--color-text) 400%
  );

  span {
    line-height: 1.5;
  }
`;
