import React, { Component } from 'react';
import {ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';
import avatarImages from '../services/AvatarProvider.js';

export default class ChatListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={avatarImages[data.imageUrl]} />
                </Left>
                <Body>
                    <Text>{data.name}</Text>
                    <Text note>{data.lastReceivedMessage}</Text>
                </Body>
                <Right>
                    <Text note>{data.lastMessageReceivedTime}</Text>
                </Right>
            </ListItem>
        );
    }
}