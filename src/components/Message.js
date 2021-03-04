import React from 'react'

const Message = ({pseudo, message, isUser }) => {
    if (isUser(pseudo)) {
        return (
            <p className='user-message'>
                {message}
            </p>
        )
    } else {
        return (<div className='not-user-message'>
            { message }
        </div>)
    }
}

export default Message