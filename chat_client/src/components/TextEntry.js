import React from 'react'
// import sendMsg from '../socket'
import socket from '../socket'

export class TextEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
        this.getMsg = this.getMsg.bind(this)
        this.sendMsg = this.sendMsg.bind(this)
        this.enterToSubmit = this.enterToSubmit.bind(this)
    }
    getMsg(e) {
        this.setState({ msg: e.target.value })
    }

    sendMsg() {
        console.log('sending message to server')
        console.log(this.state.msg)
        socket.emit('message', [this.props.user,this.state.msg])
        this.setState({ msg: "" })   
    }

    enterToSubmit(e) {
        if(e.keyCode === 13){
            this.sendMsg()
        }
    }

    render() {

        return (
            <div>
                <textarea id="textEntry" onChange={this.getMsg} value={this.state.msg} onKeyDown={this.enterToSubmit}></textarea>
                <button onClick={this.sendMsg}>SEND</button>
            </div>
        )
    }
}

export default TextEntry