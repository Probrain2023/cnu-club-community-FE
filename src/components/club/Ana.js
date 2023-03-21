import styled from "styled-components";
import Content from '../contentsData/Content';


const TopContainer = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: #F8F9FA;
  position: absolute;
  top:0;
`;



function Ana() {
  return (
    <TopContainer>
        <Content></Content>
    </TopContainer>
  );
}

export default Ana;
