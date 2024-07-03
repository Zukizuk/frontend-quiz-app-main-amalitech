import React from "react";
import Quiz from "../components/quiz";
import Result from "../components/result";
import styled from "styled-components";
import Data from "../data/data.json";
import { useLocation } from "react-router-dom";
import NotFound from "./not-found";

export default function Subject() {
  const pathname = useLocation().pathname;
  const subject = pathname.split("/")[1];
  const [showResult, setShowResult] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const quiz = Data.quizzes.find(
    (quiz) => quiz.title.toLowerCase() === subject.toLowerCase()
  );
  if (quiz === undefined) return <NotFound />; // to avoid typescript warning

  return (
    <StyledArticle>
      {showResult ? (
        <Result subject={subject} score={score} />
      ) : (
        <Quiz setShowResult={setShowResult} setScore={setScore} quiz={quiz} />
      )}
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 8.375rem;
  @media (min-width: 768px) {
    gap: 4rem;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
