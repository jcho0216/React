import styled from "styled-components";

export const TodoList = styled.div`
  width: 500px;
  height: 500px;
  max-height: 500px;
  position: relative;
  border: 2px solid var(--white);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const NoList = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
