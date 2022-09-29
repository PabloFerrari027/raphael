import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background: rgb(3, 4, 94);
  background: linear-gradient(
    45deg,
    rgba(3, 4, 94, 1) 0%,
    rgba(0, 150, 199, 1) 100%
  ); */
  background-image: url('/background.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px 5vw;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`
