
import styled from "styled-components";
import { motion } from 'framer-motion';
import { useMatch } from "react-router-dom";



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
  /* border: 1px solid black; */
  box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
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

    const wholeMatch = useMatch("/club");
    const probrainMatch = useMatch("/club/probrain");
    const adminMatch = useMatch("/club/admin");
    const argosMatch = useMatch("/club/argos");
    const anaMatch = useMatch("/club/ana");
    const motionMatch = useMatch("/club/motion");
    const spgMatch = useMatch("/club/spg");
    const daivMatch = useMatch("/club/daiv");



    return (
        <ContentsContainer>
          {
            wholeMatch ? (
              <>
              <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "plum"}}>
              <ContentsTitle>PROBRAIN</ContentsTitle>
              <ContentsMain>프로브가 이 사이트 만들었음.
  
              </ContentsMain>
              <ContentsDate>2023-03-16</ContentsDate>
              <ByLikeContainer>
                <ContentsBy>by 프로브</ContentsBy>
                <ContentsLike>♥ 120</ContentsLike>
              </ByLikeContainer>
            </Contents>
            <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "tomato"}} >
              <ContentsTitle>ADMIN</ContentsTitle>
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
            <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "pink"}}>
              <ContentsTitle>ARGOS</ContentsTitle>
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
            <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "gray"}}>
              <ContentsTitle>A&A</ContentsTitle>
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
            <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "green"}}>
              <ContentsTitle>MOTION</ContentsTitle>
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
            <Contents variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "blue"}}>
              <ContentsTitle>SPG</ContentsTitle>
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
            <Contents variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "yellow"}}>
              <ContentsTitle>DAIV</ContentsTitle>
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

              </>
            ):null
          }
            {
              probrainMatch ?
              (
                <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "plum"}}>
              <ContentsTitle>PROBRAIN</ContentsTitle>
              <ContentsMain>프로브가 이 사이트 만들었음.
  
              </ContentsMain>
              <ContentsDate>2023-03-16</ContentsDate>
              <ByLikeContainer>
                <ContentsBy>by 프로브</ContentsBy>
                <ContentsLike>♥ 120</ContentsLike>
              </ByLikeContainer>
            </Contents>
              ): null
            }
            {
              adminMatch?
              (
                <Contents variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "tomato"}} >
              <ContentsTitle>ADMIN</ContentsTitle>
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
              ):null
            }
            {
              argosMatch?
              (
                <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "pink"}}>
              <ContentsTitle>ARGOS</ContentsTitle>
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
              ): null
            }
            {
              anaMatch ?
              (
                <Contents  variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "gray"}}>
              <ContentsTitle>A&A</ContentsTitle>
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
              ): null
            }

            {
              motionMatch ?
              (
                <Contents variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "red"}}>
              <ContentsTitle>MOTION</ContentsTitle>
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
              ) : null
            }
            {
              spgMatch ?
              (
                <Contents variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "blue"}}>
              <ContentsTitle>SPG</ContentsTitle>
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
              ): null
            }

            {
              daivMatch ?
              (
                <Contents variants={ContentsVariants} initial="init" whileHover="hover" style={{backgroundColor: "yellow"}}>
              <ContentsTitle>DAIV</ContentsTitle>
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
              ) : null
            }

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