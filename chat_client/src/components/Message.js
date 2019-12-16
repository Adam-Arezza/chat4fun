import React from 'react'
import styled from 'styled-components'

const MessageStyled = styled.div`
    margin: 10px;
`

function Message(props) {
    return(
        <MessageStyled className="msg">
           {props.user}: {props.msg}
        </MessageStyled>
    )
}

export default Message