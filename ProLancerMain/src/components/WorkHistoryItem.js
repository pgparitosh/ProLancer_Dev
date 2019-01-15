import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import styles from '../styles/styles';

export default class WorkHistoryItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workType = this.props.itemWorkType === 'true' ? 'Amount Received: ' : 'Amount Paid: ';
        const cardHeader = this.props.itemWorkType === 'true' ? 'Work Assigned By: ' : 'Work Assigned To: ';
        const data = this.props.data;
        return (
            <Card style={styles.workItemCard}>
                <CardItem header>
                    <Text>{cardHeader}</Text>
                    <Text>{data.workAssignedBy}</Text>
                </CardItem>
                <CardItem header>
                    <Text>Date Assigned: </Text>
                    <Text>{data.workAssignedDate}</Text>
                </CardItem>
                <CardItem footer>
                    <Text>{workType}</Text>
                    <Text>{data.workAmount}</Text>
                </CardItem>
            </Card>
        );
    }
}