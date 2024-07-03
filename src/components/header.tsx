import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import { useLocation } from "react-router-dom";
import Switch from "./switch";
import { IconContainer, Title } from "../styles";
import Data from "../data/data.json";

export default function Header() {
  const { mode, setMode } = useTheme();
  const pathname = useLocation().pathname;
  const quizTitles = Data.quizzes.map((quiz) => quiz.title.toLowerCase());
  const subject = quizTitles.filter(
    (title) => pathname.replace("/", "") === title
  )[0];
  const handleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header>
      <Container>
        <SubjectWrapper>
          {subject && (
            <SubjectContainer>
              <IconContainer subject={subject}>
                <img
                  src={`/assets/images/${subject.toLowerCase()}.svg`}
                  alt={`${subject} Icon`}
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </IconContainer>
              <Title subject={subject}>{subject}</Title>
            </SubjectContainer>
          )}
        </SubjectWrapper>
        <SwitchContainer>
          <img
            src={`/assets/images/icon-sun-${
              mode === "light" ? "dark" : "light"
            }.svg`}
            width={16}
            height={16}
            alt="Sun"
          />
          <Switch mode={mode} toggleTheme={handleTheme} />
          <img
            src={`/assets/images/icon-moon-${
              mode === "light" ? "dark" : "light"
            }.svg`}
            width={16}
            height={16}
            alt="Sun"
          />
        </SwitchContainer>
      </Container>
    </header>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  @media (min-width: 768px) {
    padding: 3.375rem 4rem;
  }
  @media (min-width: 1024px) {
    padding: 6.063rem 8.75rem 5.438rem;
  }
`;

const SubjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  img {
    width: 16px;
    height: 16px;
    @media (min-width: 768px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const SubjectWrapper = styled.div`
  height: 2.5rem;
  width: 10.438rem;
`;
