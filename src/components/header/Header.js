import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import styles from "../style/Header.module.css";
import Probrain from './../club/Probrain';

const TopContainer = ({ children }) => {
  return <div className={styles.topContainer}>{children}</div>;
};

const FirstContainer = ({ children }) => {
  return <div className={styles.firstContainer}>{children}</div>;
};

const MainTitle = ({ children }) => {
  return (
    <motion.span
      variants={TitleVariant}
      initial="initial"
      whileTap="tap"
      whileHover="hover"
      className={styles.mainTitle}
    >
      <Link to="/">{children}</Link>
    </motion.span>
  );
};

const TitleVariant = {
  hover: { scale: 1.2, color: "black" },
  initial: { scale: 1, color: "black" },
  tap: { scale: 0.8, color: "black" },
};

const Search = ({ children }) => {
  return (
    <motion.span
      variants={SearchVariant}
      whileTap="tap"
      whileHover="hover"
      initial="initial"
      className={styles.search}
    >
      <Link to="/search">{children}</Link>
    </motion.span>
  );
};

const SearchVariant = {
  hover: { rotate: 360, transition: { duration: "0.5" } },
  initial: { rotate: 0 },
  tap: { scale: 0.9 },
};

const LoginButton = ({ children }) => {
  return <motion.button className={styles.loginBtn}>{children}</motion.button>;
};
const Login = ({ children }) => {
  return (
    <motion.span
      variants={LoginVariants}
      whileTap="tap"
      whileHover="hover"
      className={styles.login}
    >
      <Link to="/login">{children}</Link>
    </motion.span>
  );
};

const LoginVariants = {
  hover: { backgroundColor: "rgba(95,158,160,0.8)", scale: 1.05 },
  tap: { backgroundColor: "rgba(95,158,160,0.8)", scale: 0.9 },
};

const SearchLoginContainer = ({ children }) => {
  return <div className={styles.searchLoginContainer}>{children}</div>;
};

const SecondContainer = ({ children }) => {
  return <div className={styles.secondContainer}>{children}</div>;
};

const LinkContainer = ({ children, color }) => {
  return (
    <div className={styles.linkContainer} style={{ color: color }}>
      {children}
    </div>
  );
};

const CommunityLink = ({ children, go }) => {
  return (
    <motion.span className={styles.communityLink}>
      <Link to={go}>{children}</Link>
    </motion.span>
  );
};

const Circle = ({ children, layId }) => {
  return (
    <motion.div layoutId={layId} className={styles.circle}>
      {children}
    </motion.div>
  );
};

const ClubLinkContainer = ({ children, reference, onClick }) => {
  return (
    <motion.div
      className={styles.clubLinkContainer}
      ref={reference}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

const ClubLinkShow = ({ children, reference, variants, initial, animate }) => {
  return (
    <motion.div
      className={styles.clubLinkShow}
      ref={reference}
      variants={variants}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.div>
  );
};

const ClubLinkShowVariants = {
  init: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const ClubLinkDiv = ({ children, variants, whileHover }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={whileHover}
      className={styles.clubLinkDiv}
    >
      {children}
    </motion.div>
  );
};

const ClubLink = ({ children, go }) => {
  return (
    <motion.div className={styles.clubLink}>
      <Link to={go}>{children}</Link>
    </motion.div>
  );
};

const ClubLinkVariant = {
  hover: {
    color: "rgba(255,255,255,1)",
    backgroundColor: "rgba(0,0,0,1)",
  },
};

function Header() {
  const homeMatch = useMatch("/");
  const clubMatch = useMatch("/club");
  const majorMatch = useMatch("/major");
  const eventMatch = useMatch("/event");
  const [clubIsClick, setClubIsClick] = useState(false);

  const probrainMatch = useMatch("/club/probrain");
  const adminMatch = useMatch("/club/admin");
  const argosMatch = useMatch("/club/argos");
  const anaMatch = useMatch("/club/ana");
  const motionMatch = useMatch("/club/motion");
  const spgMatch = useMatch("/club/spg");
  const daivMatch = useMatch("/club/daiv");

  const clubLinkContainerRef = useRef(null);
  const clubLinkShowRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      setClubIsClick(false);
    };

    // document.addEventListener("click", handleClickOutside);

    //  return () => {
    // document.removeEventListener("click", handleClickOutside);
    // };
  }, [clubLinkContainerRef, clubLinkShowRef]);

  return (
    <TopContainer>
      <FirstContainer>
        <MainTitle>Com-Unity</MainTitle>

        <SearchLoginContainer>
          <Search>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Search>
          <Login>
            <LoginButton>Login</LoginButton>
          </Login>
        </SearchLoginContainer>
      </FirstContainer>

      <SecondContainer>
        <LinkContainer color={homeMatch ? "white" : "black"}>
          <CommunityLink go="/">전체글</CommunityLink>
          {homeMatch ? <Circle layId="circle" /> : null}
        </LinkContainer>

        <LinkContainer color={clubMatch ? "white" : "black"}>
          <CommunityLink go="/club">동아리</CommunityLink>
          {clubMatch ||
        probrainMatch ||
        spgMatch ||
        argosMatch ||
        adminMatch ||
        motionMatch ||
        anaMatch ||
        daivMatch  ? <Circle layId="circle" /> : null}
        </LinkContainer>
        <LinkContainer color={majorMatch ? "white" : "black"}>
          <CommunityLink go="/major">학과</CommunityLink>
          {majorMatch ? <Circle layId="circle" /> : null}
        </LinkContainer>
        <LinkContainer color={eventMatch ? "white" : "black"}>
          <CommunityLink go="/event">이벤트</CommunityLink>
          {eventMatch ? <Circle layId="circle" /> : null}
        </LinkContainer>

        {/* {
            clubMatch ?
            <select style={{textAlign: 'center' ,backgroundColor: "rgba(0,0,0,0.7)", color: "white", borderRadius:"1rem"}}>
                <option>전체</option>
                <option>PROBRAIN</option>
                <option>ARGOS</option>
                <option>SPG</option>
                <option>ANA</option>
            </select> : null
        } */}
        {clubMatch ||
        probrainMatch ||
        spgMatch ||
        argosMatch ||
        adminMatch ||
        motionMatch ||
        anaMatch ||
        daivMatch ? (
          <ClubLinkContainer
            reference={clubLinkContainerRef}
            onClick={() => {
              setClubIsClick(!clubIsClick);
            }}
          >
            {
              (clubMatch ? <>전체</> : null ) ||
              (probrainMatch ? <>Probrain</> : null) ||
              (spgMatch ? <>Spg</> : null) || 
              (argosMatch ? <>Argos</> : null) || 
              (adminMatch ? <>Admin</> : null) || 
              (motionMatch ? <>Motion</> : null) || 
              (anaMatch ? <>Ana</> : null) || 
              (daivMatch ? <>Daiv</> : null) 
            }
            <FontAwesomeIcon icon={faCaretDown} />
            <ClubLinkShow
              reference={clubLinkShowRef}
              variants={ClubLinkShowVariants}
              initial="init"
              animate={clubIsClick ? "animate" : "init"}
            >
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club">전체</ClubLink>
              </ClubLinkDiv>
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club/probrain">PROBRAIN</ClubLink>
              </ClubLinkDiv>
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club/admin">ADMIN</ClubLink>
              </ClubLinkDiv>
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club/argos">ARGOS</ClubLink>
              </ClubLinkDiv>
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club/ana">A&A</ClubLink>
              </ClubLinkDiv>
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club/motion">MOTION</ClubLink>
              </ClubLinkDiv>
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club/spg">SPG</ClubLink>
              </ClubLinkDiv>
              <ClubLinkDiv variants={ClubLinkVariant} whileHover="hover">
                <ClubLink go="/club/daiv">DAIV</ClubLink>
              </ClubLinkDiv>
            </ClubLinkShow>
          </ClubLinkContainer>
        ) : null}
      </SecondContainer>
    </TopContainer>
  );
}

export default Header;
