import { Link } from "react-router-dom";
import { ListItem, SmallText } from "../styles";
import styled from "styled-components";

export default function Home() {
  const subjects = ["HTML", "CSS", "Javascript", "Accessibility"];
  return (
    <Section>
      <TextContainer>
        <WelcomeHeading>
          Welcome to the <EmphasisText>Frontend Quiz!</EmphasisText>
        </WelcomeHeading>
        <SmallText>Pick a subject to get started.</SmallText>
      </TextContainer>
      <List>
        {subjects.map((subject) => (
          <ListItem key={subject}>
            <div>
              <img
                src={`/assets/images/${subject.toLowerCase()}.svg`}
                alt={`${subject} Image`}
                width={40}
                height={40}
                loading="lazy"
              />
            </div>
            <p>{subject}</p>
            <Link to={`/${subject.toLowerCase()}`}>
              <span className="sr-only">{subject}</span>
            </Link>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 15.75rem;
  @media (min-width: 768px) {
    gap: 4rem;
    margin-bottom: 15.063rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 17.5rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;

const WelcomeHeading = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 40px;
  font-weight: 300;
  line-height: 2.25rem;

  @media (min-width: 768px) {
    font-size: 64px;
    font-weight: 400;
    line-height: 64px;
  }
`;

const EmphasisText = styled.span`
  font-weight: 500;
  @media (min-width: 768px) {
    font-weight: 700;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;
