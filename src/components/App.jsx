import { Section, FeedbackOptions, Statistics, Notification } from './';
import React, { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const positivePercentage = +((good / total) * 100).toFixed(0);
  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case options[0]:
        setGood(good + 1);
        break;
      case options[1]:
        setNeutral(neutral + 1);
        break;
      case options[2]:
        setBad(bad + 1);
        break;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
