import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import { useLocation } from "react-router-dom";
import Switch from "./switch";

export default function Header() {
  const { mode, setMode } = useTheme();
  const pathname = useLocation().pathname;
  const subject = pathname.split("/")[1];

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
              <img
                src={`/assets/images/${subject.toLowerCase()}.svg`}
                alt={`${subject} Icon`}
                width={40}
                height={40}
                loading="lazy"
              />
              <span>{subject}</span>
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
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  img {
    width: 16px;
    height: 16px;
  }
`;

const SubjectWrapper = styled.div`
  height: 2.5rem;
  width: 10.438rem;
`;
