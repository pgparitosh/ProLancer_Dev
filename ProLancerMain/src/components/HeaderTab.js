import React, { Component } from 'react';
import { Header, Body, Text } from 'native-base';
import styles from '../styles/styles.js';

export default class HeaderTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={[styles.header, styles.bgRed, styles.alignChildCenter]}>
                <Body style={styles.heading}>
                    <Text style={styles.headerText}>
                        {this.props.screenTitle}
                    </Text>
                </Body>
            </Header>
        );
    }
}