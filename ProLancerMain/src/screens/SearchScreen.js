import React, { Component } from 'react';
import { Content, Body, Text } from 'native-base';
import HeaderTab from '../components/HeaderTab.js';
import styles from '../styles/styles.js';

export default class SearchScreen extends Component {
    render() {
        return (
            <Content style={styles.bgBlack}>
                <HeaderTab screenTitle="Search" />
                <Body>
                    <Text>Settings Screen</Text>
                </Body>
            </Content>
        );
    }
}