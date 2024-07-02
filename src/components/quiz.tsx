/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export default function Quiz() {
  const optionLabels = ["A", "B", "C", "D"];
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [locked, setLocked] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);
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
    <section>
      <span>Question 6 of 10</span>
      <h1>
        Which of these color contrast ratios defines the minimum WCAG 2.1 Level
        AA requirement for normal text?
      </h1>
      <ul>
        <li>A 4.5 : 1</li>
        <li>B 3 : 1</li>
        <li>C 2.5 : 1</li>
        <li>D 5 : 1</li>
      </ul>
      <button>Submit Answer</button>
    </section>
  );
}
