import styled from "styled-components";
import { useTheme } from "../context/ThemeProvider";
import { useLocation } from "react-router-dom";
import Switch from "./switch";

export default function Header() {
  const { mode, setMode } = useTheme();
  const pathname = useLocation().pathname;
  const subject = pathname.split("/")[1];
  console.log(subject);

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
        <div>
          {subject && (
            <div>
              <img
                src={`/assets/images/${subject.toLowerCase()}.svg`}
                alt={`${subject} Icon`}
                width={40}
                height={40}
                loading="lazy"
              />
              <span>{subject}</span>
            </div>
          )}
        </div>
        <div className="flex-between gap-2 lg:gap-4">
          <img
            src={`/assets/images/icon-sun-${
              mode === "light" ? "dark" : "light"
            }.svg`}
            width={16}
            height={16}
            alt="Sun"
          />
          <Switch toggleTheme={handleTheme} />
          <img
            src={`/assets/images/icon-moon-${
              mode === "light" ? "dark" : "light"
            }.svg`}
            width={16}
            height={16}
            alt="Sun"
          />
        </div>
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
