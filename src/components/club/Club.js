import { Button } from "react-bootstrap"; //2번

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Content from "../contentsData/Content";
import TopContainer from "../bodyContainer/TopContainer";

// Small = sm = ≥576px
// Medium = md = ≥768px
// Large = lg = ≥992px
// Extra large = xl = ≥1200px
// Extra extra large = xxl = ≥1400px

//예시
{
  /* <Container>
  <Row>
    <Col xs={12} md={8} style={{ backgroundColor: "blue" }}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4} style={{ backgroundColor: "tomato" }}>
      xs=6 md=4
    </Col>
  </Row>
</Container>; */
}

// 자세한 내용 리액트 부트스트랩 참조 https://react-bootstrap.github.io/layout/breakpoints/


function Club() {
  return (
    <TopContainer>
      <Content></Content>
    </TopContainer>
  );
}

export default Club;
