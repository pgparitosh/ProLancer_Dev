import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Content, Body, Text } from 'native-base';
import HeaderTab from '../components/HeaderTab';
import styles from '../styles/styles.js';

export default class ChatScreen extends Component {
    render() {
        return(
            <Content style={styles.bgBlack}>
                <StatusBar hidden/>
                <HeaderTab screenTitle="My Chat" />
                <Body>
                    <Text>Chat Screen</Text>
                </Body>
            </Content>
        );
    }
}