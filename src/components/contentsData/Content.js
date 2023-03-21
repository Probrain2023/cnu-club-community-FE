
import styled from "styled-components";
import { motion } from 'framer-motion';




const ContentsContainer = styled.div`
  margin-top: 20vh;
  /* background-color: tomato; */
  padding: 0 2%;
  width: 100%;
  height: 180vh;
  display: grid;
  /* place-items: center; */
   justify-items: center;
   /* overflow-y: auto; */
  @media (min-width: 0px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit ,83vw);
  }
  @media (min-width: 744px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fit ,43vw);
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit ,27rem);
  }
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit ,27rem);
  }
  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(auto-fit ,27rem);
  }
`

const Contents = styled(motion.div)`
  /* margin-top: 2vh; */
  border: 1px solid black;
  border-radius: 5%;
  @media (min-width: 0px) {
    width: 90vw;
    height: 80vw;
    /* background-color: green; */
  }
  @media (min-width: 744px) {
    width: 40vw;
    height: 40vw;
    /* background-color: pink; */
    
  }
  @media (min-width: 992px) {
    width: 19rem;
    height: 24rem;
    /* background-color: blue; */
  }
  @media (min-width: 1400px) {
    width: 20rem;
    height: 24rem;
    /* background-color: yellow; */
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  background-color: white;
    
`
const ContentsVariants = {
  hover: {y: -10, transition: 1,  boxShadow: " 0 10px rgba(0,0,0,0.3)"},
  init: {y: 0}
}

const ContentsTitle = styled.div`
  margin-top: 10%;
  margin-left: 3%;
  font-size: 2rem;
  font-weight: bold;
`

const ContentsMain = styled.div`
  width: 80%;
  height: 50%;
  overflow: hidden;
  margin-left: 3%;
`
const ContentsDate = styled.div`
  /* margin-top: 50%; */
  margin-left: 3%;
`
const ByLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 2%;
`
const ContentsBy = styled.div`
  margin-left: 7%;
`
const ContentsLike = styled.div`
  margin-right: 7%;
`



function Content() {
    const contentsArray = Array.from({ length: 15 }, (_, index) => index);
    return (
        <ContentsContainer>
            
          {
            contentsArray.map((_, index) => (
              <Contents key={index} variants={ContentsVariants} initial="init" whileHover="hover">
              <ContentsTitle>Title</ContentsTitle>
              <ContentsMain>sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample
              sample sample sample sample sample sample sample
  
              </ContentsMain>
              <ContentsDate>2023-03-16</ContentsDate>
              <ByLikeContainer>
                <ContentsBy>by someone</ContentsBy>
                <ContentsLike>♥ 120</ContentsLike>
              </ByLikeContainer>
            </Contents>
            ))
          }
  
          </ContentsContainer>
          
  
    );
  }
  
  export default Content;