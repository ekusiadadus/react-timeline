import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TimeLine from "./components/Timeline";

function App() {
  const [count, setCount] = useState(0);

  const events: {
    heading: string;
    subHeading: string;
    direction: string;
  }[] = [
    {
      heading: "Event 1",
      subHeading: "Startec project",
      direction: "right",
    },
    {
      heading: "Event 2",
      subHeading: "Startec project",
      direction: "left",
    },
    {
      heading: "Event 3",
      subHeading: "Startec project",
      direction: "right",
    },
    {
      heading: "Event 4",
      subHeading: "Startec project",
      direction: "left",
    },
    {
      heading: "Event 5",
      subHeading: "Startec project",
      direction: "right",
    },
    {
      heading: "Event 6",
      subHeading: "Startec project",
      direction: "left",
    },
    {
      heading: "Event 7",
      subHeading: "Startec project",
      direction: "right",
    },
    {
      heading: "Event 8",
      subHeading: "Startec project",
      direction: "left",
    },
    {
      heading: "Event 9",
      subHeading: "Startec project",
      direction: "right",
    },
    {
      heading: "Event 10",
      subHeading: "Startec project",
      direction: "left",
    },
    {
      heading: "Event 11",
      subHeading: "Startec project",
      direction: "right",
    },
    {
      heading: "Event 12",
      subHeading: "Startec project",
      direction: "left",
    },
  ];

  return (
    <>
      <div>
        <TimeLine events={events} />
      </div>
    </>
  );
}

export default App;
