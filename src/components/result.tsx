import styled from "styled-components";
import { IconContainer, StyledButton, Title } from "../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ResultProps {
  subject: string;
  score: number;
}

export default function Result({ subject, score }: ResultProps) {
  return (
    <>
      <div style={{ flexShrink: "0" }}>
        <Heading>
          Quiz completed
          <br />
          <Emphasis>You scored...</Emphasis>
        </Heading>
      </div>
      <Container>
        <ScoreCard
          as={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Score>
            <IconContainer as="span" subject={subject}>
              <img
                src={`/assets/images/${subject.toLowerCase()}.svg`}
                alt={`${subject} Image`}
                width={40}
                height={40}
              />
            </IconContainer>
            <Title subject={subject}>{subject}</Title>
          </Score>
          <ScoreText>
            {score}
            <SmallText> out of 10</SmallText>
          </ScoreText>
        </ScoreCard>
        <StyledLink as={Link} to="/">
          Play Again
        </StyledLink>
      </Container>
    </>
  );
}

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Emphasis = styled.strong`
  font-weight: 500;
  line-height: 1.25;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    gap: 2rem;
  }
  @media (min-width: 1024px) {
    width: 35.25rem;
  }
`;
const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 12px;
  background-color: ${(props) => `rgb(${props.theme.itemBG})`};
  padding: 2rem;
  @media (min-width: 768px) {
    gap: 2.5rem;
    padding: 3rem;
  }
`;
const Score = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ScoreText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 5.5rem;
  font-weight: 500;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 9rem;
  }
`;
const SmallText = styled.span`
  font-size: 1.125rem;
  font-weight: normal;
  color: rgb(${({ theme }) => theme.textSecondary});
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(StyledButton)`
  text-decoration: none;
  filter: ${(props) => props.theme.uniqueFilter};
`;
