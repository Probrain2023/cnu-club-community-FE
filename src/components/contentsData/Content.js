
import styled from "styled-components";
import { motion } from 'framer-motion';
import { useMatch } from "react-router-dom";
import styles from "../style/Contents.module.css";



const ContentsContainer = ({children}) => {
  return (
    <div className={styles.contentsContainer}>
      {children}
    </div>
  );
};

const Contents = ({variants, initial, whileHover, style, children}) => {
  return (
    <motion.div 
    className={styles.contents} 
    variants={variants}
    initial={initial}
    whileHover={whileHover}
    style={style}
    >
      {children}
    </motion.div>
  );
};

const ContentsVariants = {
  hover: {y: -10, transition: 1,  boxShadow: " 0 10px rgba(0,0,0,0.3)"},
  init: {y: 0}
}

const ContentsTitle = ({children}) => {
  return (
    <div className={styles.contentsTitle}>
      {children}
    </div>
  );
};

const ContentsMain = ({children}) => {
  return (
    <div className={styles.contentsMain}>
      {children}
    </div>
  );
};

const ContentsDate = ({children}) => {
  return (
    <div className={styles.contentsDate}>
      {children}
    </div>
  );
};

const ByLikeContainer = ({children}) => {
  return (
    <div className={styles.byLikeContainer}>
      {children}
    </div>
  );
};

const ContentsBy = ({children}) => {
  return (
    <div className={styles.contentsBy}>
      {children}
    </div>
  );
};

const ContentsLike = ({children}) => {
  return (
    <div className={styles.contentsLike}>
      {children}
    </div>
  );
};



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