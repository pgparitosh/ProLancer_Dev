import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import { Content, Text } from 'native-base';
import HeaderTab from '../components/HeaderTab';
import styles from '../styles/styles.js';

export default class ProfileScreen extends Component {
    render() {
        const screenTitle = 'My Profile';
        return(
            <Content style={styles.bgBlack}>
                <StatusBar hidden/>
                <HeaderTab screenTitle={screenTitle}></HeaderTab>
                <Content>
                    <Text>Profile Screen</Text>
                </Content>
            </Content>
        );
    }
}