import FVLogo from "/fv-logo.svg";
import styled from "styled-components";
import { Text } from "@/styles/texts";
const Navbar = () => {
  return (
    <>
      <Container>
        <img src={FVLogo} className="logo" alt="FV logo" width="100px" />
        <SubContainer>
          <HoverText>HOME</HoverText>
          <HoverText>ABOUT</HoverText>
          <HoverText>SKILLS</HoverText>
          <HoverText>PROJECTS</HoverText>
          <HoverText>CONTACT</HoverText>
        </SubContainer>
      </Container>
      <Line />
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  padding: 1rem 2rem;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-text);
  opacity: 0.2;
`;

const HoverText = styled(Text)`
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
  }
`;
