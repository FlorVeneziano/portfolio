import me from "@/assets/images/me.png";
import Card from "@/components/Card";
import { PrincipalSubtitle, PrincipalTitle } from "@/styles/texts";
import { Container, Content, ImgMe, Titles } from "./styles";
const Home = () => {
  return (
    <Container>
      <ImgMe imageUrl={me} />
      <Content>
        <Titles>
          <PrincipalTitle>Hello</PrincipalTitle>
          <PrincipalSubtitle>I'm Flor</PrincipalSubtitle>
        </Titles>

        <Card
          title="My self introduction"
          text="A Full-Stack Developer with 3 years of experience and a passion for creating beautiful and functional websites."
        />
      </Content>
    </Container>
  );
};

export default Home;
