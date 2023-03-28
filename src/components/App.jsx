import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import { Card } from './Feedback.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const btnValue = event.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [btnValue]: prevState[btnValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((a, b) => a + b, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return positiveFeedback;
  };

  render() {
    return (
      <Card>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleIncrement}
            />
          }
        />
        {!this.countTotalFeedback()
          ? <Notification message="There is no feedback" />
          : <Section
            title="Statistics"
            children={
              <Statistics
                stats={this.state}
                total={this.countTotalFeedback()}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            }
            />
        }
      </Card>
    );
  };
};