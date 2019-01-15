import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';
import styles from '../styles/styles.js';
import WorkHistoryItem from '../components/WorkHistoryItem';

export default class WorkHistoryScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const workType = this.props.workType;
        const data = this.props.data;
        if (data.length > 0) {
            return (
                <List>
                    {data.map(function (k) {
                        return (
                            <ListItem key={k.workId} style={{padding: 10}}>
                                <WorkHistoryItem data={k} itemWorkType={workType} />
                            </ListItem>
                        );
                    })}
                </List>
            );
        }
        else {
            return (
                <Text>No work history found.</Text>
            );
        }
    }
}