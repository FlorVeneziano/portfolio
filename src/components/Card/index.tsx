import { Text, Title } from "@/styles/texts";
import { Container } from "./styles";

interface CardProps {
  title: string;
  text: string;
}

const Card = ({title, text}: CardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>
        {text}
      </Text>
    </Container>
  );
};

export default Card;
