import React from 'react';
import MessageComponent from '../message/message.component';

export default class HomeComponent extends React.Component {
    test = () => <MessageComponent message="Home Component"></MessageComponent>
    render() {
        return this.test()
    }
}