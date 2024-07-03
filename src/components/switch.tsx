import React from "react";
import styled from "styled-components";

interface Props {
  toggleTheme: () => void;
  mode: string;
}

export default function Switch({ toggleTheme, mode }: Props) {
  return (
    <StyledSwitch
      data-state={mode === "dark" ? "checked" : "unchecked"}
      role="switch"
      aria-checked={mode === "dark"}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <Thumb data-state={mode === "dark" ? "checked" : "unchecked"}></Thumb>
    </StyledSwitch>
  );
}

const StyledSwitch = styled.button`
  display: inline-flex;
  width: 2rem;
  padding: 4px;
  align-items: center;
  background-color: rgb(var(--purple));
  border-radius: 9999px;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 1.75rem;
    width: 3rem;
  }
  @media (min-width: 1024px) {
    width: 48px;
    height: 28px;
  }
`;

const Thumb = styled.span`
  background-color: white;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  display: block;
  transform: translateX(0);
  transition: transform 0.2s;
  @media (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
  &[data-state="checked"] {
    transform: translateX(0.8rem);
    @media (min-width: 768px) {
      transform: translateX(1.25rem);
    }
  }
`;
