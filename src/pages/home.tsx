import { Link } from "react-router-dom";

export default function Home() {
  const subjects = ["HTML", "CSS", "Javascript", "Accessibility"];
  return (
    <div>
      <h1>
        Welcome to the
        <span>Frontend Quiz!</span>
      </h1>
      <p>Pick a subject to get started.</p>
      <ul>
        {subjects.map((subject) => (
          <li key={subject}>
            <Link to={`/${subject.toLowerCase()}`}>{subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
