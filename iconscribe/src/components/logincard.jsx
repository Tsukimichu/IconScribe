import React from 'react';

function LoginCard({label}) {
    return(
        <>
        <div className="info-card"> 
            <img src="../assets/ICONS.png" alt="Logo"/>
            <input type="text" placeholder={label} />
        </div>
        </>
    );
}

export default LoginCard