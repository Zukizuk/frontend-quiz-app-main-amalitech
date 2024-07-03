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
