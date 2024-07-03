import styled from "styled-components";

export const SmallText = styled.p`
  font-size: 0.875rem;
  line-height: 150%;
  color: rgb(${({ theme }) => theme.textSecondary});
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 12px;
  background-color: ${(props) => `rgb(${props.theme.itemBG})`};
  padding: 0.75rem;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  filter: ${(props) => props.theme.filter};
  @media (min-width: 768px) {
    gap: 2rem;
    border-radius: 24px;
  }
  @media (min-width: 1024px) {
    width: 35.25rem;
    padding: 1.25rem;
    font-size: 1.75rem;
  }
`;

interface IconContainerProps {
  subject: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  display: grid;
  place-items: center;
  border-radius: 6px;
  width: 2.5rem;
  height: 2.5rem;
  padding: 4px;
  flex-shrink: 0;
  background-color: ${(props) =>
    props.theme.colors[props.subject.toLowerCase()] || props.theme.itemBG};
  @media (min-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

interface TitleProps {
  subject: string;
}

export const Title = styled.span<TitleProps>`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 28px;
  ${(props) =>
    ["html", "css"].includes(props.subject.toLowerCase())
      ? `
    text-transform: uppercase;
  `
      : `
    text-transform: capitalize;
  `}
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
export const StyledButton = styled.button`
  height: 56px;
  border-radius: 12px;
  background-color: rgb(var(--purple));
  padding: 0.75rem;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  filter: ${(props) => props.theme.filter};
  @media (min-width: 768px) {
    position: relative;
    height: 92px;
    border-radius: 24px;
    padding: 2rem;
    font-size: 1.75rem;
    &::after {
      content: "";
      position: absolute;
      border-radius: inherit;
      inset: 0;
      background-color: white;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover {
      &::after {
        opacity: 0.5;
      }
    }
  }
`;
