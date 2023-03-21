import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const TopContainer = styled.div`
  width: 100vw;
  height: 15vh;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  /* background-color: mintcream; */
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainTitle = styled(motion(Link))`
  margin-top: 0.5vh;
  font-size: 1.5rem;
  color: black;
  /* &:hover {
    color: black;
  } */
  @media (min-width: 992px) {
    font-size: 2rem;
  }
  @media (min-width: 1400px) {
    font-size: 3rem;
  }
  margin-left: 10vw;
`;

const TitleVariant = {
  hover: {scale: 1.2, color:"black"},
  initial: {scale:1, color:"black"},
  tap: {scale: 0.8, color: "black"}
}

const Search = styled(motion(Link))`
  font-size: 1rem;
  margin-right: 2vw;

  &:hover {
    color: black;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1400px) {
    font-size: 2rem;
  }
`;

const SearchVariant = {
  hover : {rotate: 360, transition:{duration: "0.5"}},
  initial : {rotate: 0},
  tap:{scale:0.9}
}

const LoginButton = styled(motion.button)`
  color: white;
  &:hover {
    color: black;
  }
`;
const Login = styled(motion(Link))`
  border-radius: 0.2rem;
  font-size: 0.5rem;
  width: 3.5rem;
  height: 1.5rem;
  color: white;
  text-align: center;
  background-color: rgba(95,158,160,1);
  @media (min-width: 992px) {
    width: 5rem;
    height: 2rem;
    font-size: 1rem;
  }
  @media (min-width: 1400px) {
    width: 6rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginVariants = {
  hover: {backgroundColor: "rgba(95,158,160,0.8)", scale:1.05},
  tap: {backgroundColor: "rgba(95,158,160,0.8)", scale:0.9}
}

const SearchLoginContainer = styled.div`
  margin-top: 1vw;
  margin-right: 10vw;
  display: flex;
`;

const SecondContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-left: 10vw;
`;

const LinkContainer = styled.div`
  margin-right: 3vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid white; */
  display: flex;
  border-radius: 0.7rem;
  width: 3.5rem;
  height: 1.5rem;
  font-size: 1rem;
  @media (min-width: 992px) {
    width: 5rem;
    height: 3rem;
    font-size: 1rem;
  }
  @media (min-width: 1400px) {
    width: 6rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  color: ${(props) => props.color};

  
`;

const CommunityLink = styled(motion(Link))`
    font-size: 1rem;
    @media (min-width: 992px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1400px) {
    font-size: 2rem;
  }
    z-index: 2;
    &:hover {
    color: black;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  background-color: #5f9ea0;
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
`;

function Header() {

    
    const homeMatch = useMatch("/");
    const clubMatch = useMatch("/club");
    const majorMatch = useMatch("/major");
    const eventMatch = useMatch("/event");



  return (
    <TopContainer>
      <FirstContainer>
        <MainTitle to="/" variants={TitleVariant} initial="initial" whileTap="tap" whileHover="hover">Com-Unity</MainTitle>

        <SearchLoginContainer>
          <Search to="/search" variants={SearchVariant} whileTap="tap" whileHover="hover" initial="initial">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Search>
          <Login to="/login" variants={LoginVariants} whileTap="tap" whileHover="hover">
            <LoginButton>Login</LoginButton>
          </Login>
        </SearchLoginContainer>
      </FirstContainer>

      <SecondContainer>
        <LinkContainer color={homeMatch ? "white": "black"}>
          <CommunityLink to="/"  >전체글</CommunityLink>
          {homeMatch ? <Circle layoutId="circle" /> : null}
        </LinkContainer>

        <LinkContainer color={clubMatch ? "white": "black"}>
          <CommunityLink to="/club" >동아리</CommunityLink>
          {clubMatch ? <Circle layoutId="circle" /> : null}
        </LinkContainer>
        <LinkContainer color={majorMatch ? "white": "black"}>
          <CommunityLink to="/major" >학과</CommunityLink>
          {majorMatch ? <Circle layoutId="circle" /> : null}
        </LinkContainer>
        <LinkContainer color={eventMatch ? "white": "black"}>
          <CommunityLink to="/event" >이벤트</CommunityLink>
          {eventMatch ? <Circle layoutId="circle" /> : null}
        </LinkContainer>

        {
            clubMatch ?
            <select style={{textAlign: 'center' ,backgroundColor: "rgba(0,0,0,0.7)", color: "white", borderRadius:"1rem"}}>
                <option>전체</option>
                <option>PROBRAIN</option>
                <option>ARGOS</option>
                <option>SPG</option>
                <option>ANA</option>
            </select> : null
        }

      </SecondContainer>
    </TopContainer>
  );
}

export default Header;
