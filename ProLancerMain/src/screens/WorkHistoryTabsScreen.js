import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Content, Body, Text, List, ListItem, Tab, Tabs, ScrollableTab } from 'native-base';
import HeaderTab from '../components/HeaderTab';
import styles from '../styles/styles.js';
import WorkHistoryScreen from '../screens/WorkHistoryScreen.js';

const workAssigned = [
    {
        "workId": "1",
        "workAssignedBy": "John Doe",
        "workAssignedDate": "12-Jan-2019",
        "workAmount": "1000 INR"
    },
    {
        "workId": "2",
        "workAssignedBy": "Mary Woody",
        "workAssignedDate": "10-Jan-2019",
        "workAmount": "3000 INR"
    },
    {
        "workId": "3",
        "workAssignedBy": "Don Maddy",
        "workAssignedDate": "01-Jan-2019",
        "workAmount": "3000 INR"
    }
];
const workDone = [
    {
        "workId": "1",
        "workAssignedBy": "John Doe",
        "workAssignedDate": "12-Jan-2019",
        "workAmount": "1000 INR"
    },
    {
        "workId": "2",
        "workAssignedBy": "Mary Woody",
        "workAssignedDate": "10-Jan-2019",
        "workAmount": "3000 INR"
    },
    {
        "workId": "3",
        "workAssignedBy": "Don Maddy",
        "workAssignedDate": "01-Jan-2019",
        "workAmount": "3000 INR"
    }
];

export default class WorkHistoryTabsScreen extends Component {
    render() {
        return (
            <Content>
                <StatusBar hidden />
                <HeaderTab screenTitle="Work History" />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Work Done">
                        <WorkHistoryScreen workType="true" data={workDone} />
                    </Tab>
                    <Tab heading="Professionals Hired">
                        <WorkHistoryScreen workType="false" data={workAssigned}/>
                    </Tab>
                </Tabs>
            </Content>
        );
    }
}