import React from 'react';
import PollForm from './components/PollForm';
const steps = [
  {
    title: "How was your week overall?",
    options: [
      { icon: "👍", label: "Good" },
      { icon: "🤔", label: "Okay" },
      { icon: "👎", label: "Bad" },
    ],
  },
  {
    title: "How was your productivity?",
    options: [
      { icon: "🚀", label: "High" },
      { icon: "👌", label: "Average" },
      { icon: "🐢", label: "Low" },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <PollForm steps={steps} />
    </div>
  );
};

export default App;
