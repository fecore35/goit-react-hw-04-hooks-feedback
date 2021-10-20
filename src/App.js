import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerStatistics = (e) => {
    const { feedback } = e.currentTarget.dataset;

    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    const { state, handlerStatistics } = this;
    const { good, neutral, bad } = state;

    const countTotalFeedback = Object.values(state).reduce(
      (total, value) => (total += value),
      0
    );

    const countPositiveFeedbackPercentage = (good * 100) / countTotalFeedback;

    return (
      <>
        <Section title="Pleas leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={handlerStatistics}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
