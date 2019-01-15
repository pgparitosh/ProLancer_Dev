import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Content, Body, Text } from 'native-base';
import HeaderTab from '../components/HeaderTab';
import styles from '../styles/styles.js';

export default class WorkHistoryScreen extends Component {
    render() {
        return(
            <Content style={styles.bgBlack}>
                <StatusBar hidden/>
                <HeaderTab screenTitle="Work History" />
                <Body>
                    <Text>Work History Screen</Text>
                </Body>
            </Content>
        );
    }
}