import React from 'react';
import SetTitle from '../../hooks/setTitle';

const Login = () => {
    SetTitle('Login');
    console.log('this log in');
    return (
        <div>
            login
        </div>
    );
};

export default Login;