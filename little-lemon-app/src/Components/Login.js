import React, { useEffect } from 'react';

function Login() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}

export default Login;