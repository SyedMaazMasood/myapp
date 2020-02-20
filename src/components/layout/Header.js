import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Lets Talk!</h1>
        </header>
    )
}

const headerStyle = {
    background: '#009A67',
    color: '#fff',
    textAlign: 'left',
    padding: '10px'
}

export default Header;