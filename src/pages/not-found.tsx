import { StyledButton } from "../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <Container>
      <Heading>404</Heading>
      <Text>Page not found</Text>
      <StyledLink to="/" as={Link}>
        back home
      </StyledLink>
    </Container>
  );
}

const StyledLink = styled(StyledButton)`
  text-decoration: none;
  height: 2rem;
  border-radius: 6px;
`;
const Heading = styled.h1`
  font-size: 8rem;
  font-weight: 500;
  line-height: 80%;
  margin-bottom: 5rem;
  -webkit-box-reflect: below 0
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  @media (min-width: 768px) {
    font-size: 13rem;
  }
`;
const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
`;
