import React from 'react'
import Message from './Message'
import socket from '../socket'
import styled from 'styled-components'

const StyledChatWindow = styled.div`
    height: 75vh;
    background: lightgray;
    overflow-y: scroll;
    text-align: left;
`

export class ChatWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
        this.clearChat = this.clearChat.bind(this)
    }
    componentDidMount() {
        socket.on('message', msg => this.setState({ messages: [...this.state.messages, { sentBy: msg[0], msg: msg[1] }] }))
    }

    clearChat() {
        this.setState({ messages: [] })
    }

    render() {
        let msgs = this.state.messages.map((msg, index) => <Message user={msg.sentBy} msg={msg.msg} key={index}></Message>)
        return (
            <StyledChatWindow>
                <button onClick={this.clearChat}>Clear chat</button>
                <div>
                    {msgs}
                </div>
            </StyledChatWindow>
        )
    }
}

export default ChatWindow