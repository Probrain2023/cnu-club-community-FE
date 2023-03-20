import styled from "styled-components";
import { Button } from "react-bootstrap"; //2번

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// Small = sm = ≥576px
// Medium = md = ≥768px
// Large = lg = ≥992px
// Extra large = xl = ≥1200px
// Extra extra large = xxl = ≥1400px

//예시
{/* <Container>
  <Row>
    <Col xs={12} md={8} style={{ backgroundColor: "blue" }}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4} style={{ backgroundColor: "tomato" }}>
      xs=6 md=4
    </Col>
  </Row>
</Container>; */}

// 자세한 내용 리액트 부트스트랩 참조 https://react-bootstrap.github.io/layout/breakpoints/

const TopContainer = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: mintcream;
`;

const ReactContainer = styled(Container)`
`

function Club() {
  return (
    <TopContainer>
        

    </TopContainer>
  );
}

export default Club;
