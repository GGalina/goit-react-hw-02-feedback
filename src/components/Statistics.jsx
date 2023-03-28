import { Component } from 'react';
import { nanoid } from 'nanoid';
import { StatContainer, StatItem } from './Feedback.styled';

export class Statistics extends Component {
    render() {
        return (
            <StatContainer>
                {Object.entries(this.props.stats).map(([key, value]) => {
                return (
                    <StatItem key={nanoid()}>
                        {key}: {value}
                    </StatItem>
                    )
                })}
                    <StatItem>Total: {this.props.total}</StatItem>
                    <StatItem>Positive feedback: {this.props.positiveFeedback} %</StatItem>
            </StatContainer>
        );
    }
};