import React from 'react';

import md5 from 'md5';

function Gravatar(props) {
    const email = props.email;
    const hash = md5(email);
    return (
        <img 
            src={`https://gravatar.com/avatar/${hash}?d=identicon`}
            className={props.className}
            alt={props.alt}
            style={props.style}
        />
    )
}

export default Gravatar;