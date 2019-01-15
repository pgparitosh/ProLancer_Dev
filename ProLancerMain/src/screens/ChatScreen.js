import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Content, List, ListItem } from 'native-base';
import HeaderTab from '../components/HeaderTab';
import styles from '../styles/styles.js';
import ChatListItem from '../components/ChatListItem';

const chatData = [
    {
        'userId': '1',
        'name': 'John Doe',
        'imageUrl': 'avatar1',
        'lastReceivedMessage': 'This is the last message received..',
        'lastMessageReceivedTime': '3:43 PM'
    },
    {
        'userId': '2',
        'name': 'Mary Woody',
        'imageUrl': 'avatar2',
        'lastReceivedMessage': 'This is the last message received..',
        'lastMessageReceivedTime': '1:43 PM'
    },
    {
        'userId': '3',
        'name': 'O Cornell',
        'imageUrl': 'avatar3',
        'lastReceivedMessage': 'This is the last message received..',
        'lastMessageReceivedTime': '11:43 AM'
    },
];

export default class ChatScreen extends Component {
    render() {
        return (
            <Content>
                <StatusBar hidden />
                <HeaderTab screenTitle="My Chats" />
                <Content>
                    <List>
                        {chatData.map(function (k) {
                            return (
                                <ChatListItem key={k.userId} style={{ padding: 10 }} data={k} />
                            );
                        })}
                    </List>
                </Content>
            </Content>
        );
    }
}