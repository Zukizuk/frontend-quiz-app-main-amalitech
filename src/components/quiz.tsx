/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";
import { ListItem, SmallText } from "../styles";
import Progress from "./progress";

interface QuizProps {
  setShowResult: (value: boolean) => void;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  quiz: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };
}

export default function Quiz({ setShowResult, quiz }: QuizProps) {
  const optionLabels = ["A", "B", "C", "D"];
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [locked, setLocked] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(
    null
  );
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const handleChoice = (choice: string) => {
    if (locked) return;
    setShowError(false);
    setSelectedAnswer(choice);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setShowError(true);
      return;
    }
    setIsSubmitted(true);
    setLocked(true);
  };

  const nextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion === quiz.questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setLocked(false);
      setIsSubmitted(false);
    }
  };
  return (
    <>
      <Root>
        <Question>
          <SmallText>
            Question {currentQuestion + 1} of {quiz.questions.length}
          </SmallText>
          <Heading>{quiz.questions[currentQuestion].question}</Heading>
        </Question>
        <Progress
          value={((currentQuestion + 1) / quiz.questions.length) * 100}
        />
      </Root>
      <Container>
        <h2 className="sr-only">Options</h2>
        <Options>
          {quiz.questions[currentQuestion].options.map((option, index) => {
            const isCorrect = option === quiz.questions[currentQuestion].answer;
            const isSelected = selectedAnswer === option;
            return (
              <Option
                role="button"
                key={index}
                onClick={() => handleChoice(option)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleChoice(option);
                  }
                }}
                aria-pressed={isSelected}
                isSelected={isSelected}
                isSubmitted={isSubmitted}
                locked={locked}
                isCorrect={isCorrect}
              >
                <OptionLabel
                  isSelected={isSelected}
                  isSubmitted={isSubmitted}
                  locked={locked}
                  isCorrect={isCorrect}
                >
                  {optionLabels[index]}
                </OptionLabel>
                <OptionText>{option}</OptionText>
                <IconWrapper>
                  {locked && (isCorrect || isSelected) && (
                    <img
                      src={`/assets/images/icon-${
                        isCorrect ? "correct" : "incorrect"
                      }.svg`}
                      height={24}
                      width={24}
                      alt={isCorrect ? "Correct" : "Incorrect"}
                    />
                  )}
                </IconWrapper>
              </Option>
            );
          })}
        </Options>
        <StyledButton onClick={isSubmitted ? nextQuestion : handleSubmit}>
          {isSubmitted
            ? currentQuestion + 1 < quiz.questions.length
              ? "Next Question"
              : "Finish Quiz"
            : "Submit Answer"}
        </StyledButton>
        {showError && (
          <ErrorMessage>
            <img
              src="/assets/images/icon-error.svg"
              alt="Incorrect"
              height={32}
              width={32}
            />{" "}
            Please select an answer
          </ErrorMessage>
        )}
      </Container>
    </>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
    padding-bottom: 7.625rem;
  }
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 120%;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;
const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;
interface OptionProps {
  isSelected: boolean;
  isSubmitted: boolean;
  locked: boolean;
  isCorrect: boolean;
}
const Option = styled(ListItem)<OptionProps>`
  ${(props) =>
    props.isSelected &&
    !props.isSubmitted &&
    css`
      outline: 3px solid rgb(var(--purple));
    `}
  ${(props) =>
    props.locked &&
    props.isSelected &&
    css`
      outline: 3px solid
        ${props.isCorrect ? "rgb(var(--green))" : "rgb(var(--red))"};
    `}
`;
const OptionLabel = styled.div<OptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  background-color: rgb(var(--light-grey));
  color: rgb(var(--grey-navy));
  padding: 0.25rem;
  text-transform: uppercase;
  line-height: normal;
  flex-shrink: 0;
  ${(props) =>
    props.locked && props.isSelected
      ? props.isCorrect
        ? css`
            background-color: rgb(var(--green));
            color: rgb(var(--white));
          `
        : css`
            background-color: rgb(var(--red));
            color: rgb(var(--white));
          `
      : ""}
  ${(props) =>
    props.isSelected &&
    !props.isSubmitted &&
    css`
      background-color: rgb(var(--purple));
      color: rgb(var(--white));
    `}
  @media (min-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
const OptionText = styled.p`
  flex: 1;
  font-size: 0.875rem;
  line-height: 100%;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
const IconWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  @media (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const StyledButton = styled.button`
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
  &:hover {
    background-color: rgba(var(--purple), 0.9);
  }

  @media (min-width: 768px) {
    height: 92px;
    border-radius: 24px;
    padding: 2rem;
    font-size: 1.75rem;
  }
`;
const ErrorMessage = styled.p`
  position: absolute;
  bottom: -3.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 1.125rem;
  line-height: 120%;
  color: var(--red);
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  img {
    @media (min-width: 1024px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
