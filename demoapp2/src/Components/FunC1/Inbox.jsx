import React from 'react';

function Inbox(props) {
    return (
        <div>
            <h6> {props.mailsender} :{props.subject} : {props.sentDate}</h6>
        </div>
    );
}
export default Inbox;

