import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--dark-500);
  height: 245px;
  background: linear-gradient(90deg, rgba(2,0,36,1) 2%, rgba(9,9,121,1) 24%, rgba(0,212,255,1) 100%);

  img {
    position: absolute;
    left: 10px;
    top: 30px;
    width: 200px;
  }
`