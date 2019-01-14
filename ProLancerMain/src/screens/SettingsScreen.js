import React, { Component } from 'react';
import { Content, Body, Text } from 'native-base';
import HeaderTab from '../components/HeaderTab';
import styles from '../styles/styles.js';

export default class SettingsScreen extends Component{
    render() {
        return(
            <Content style={styles.bgBlack}>
                <HeaderTab screenTitle="Account Settings"/>
                <Body>
                    <Text>Settings Screen</Text>
                </Body>
            </Content>
        );
    }
}