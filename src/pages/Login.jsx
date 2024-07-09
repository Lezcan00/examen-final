import React from 'react';

const Login = () => {
return (
    <div className='loginContainer'>
        <h2>Login</h2>
        <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log in to your account</button>
        </form>
    </div>
);
};

export default Login;