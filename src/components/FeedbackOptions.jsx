import { Component } from 'react';
import { nanoid } from 'nanoid';
import { BtnContainer, Btn } from './Feedback.styled';

export class FeedbackOptions extends Component {
    render() {
        const stateValues = Object.keys(this.props.options);
        return (
            <BtnContainer>
                {stateValues.map(value => (
                    <Btn
                        key={nanoid()}
                        value={value}
                        onClick={event => this.props.onLeaveFeedback(event)}
                        type="button"
                        >
                        {value}
                    </Btn>
                ))}
            </BtnContainer>
        );
    }
};