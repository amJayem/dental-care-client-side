import React, { useContext } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }

    if(loading){
        return <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel='falling-lines-loading'
      />
    }

    return (
        <Navigate
            to='/login'
            state = {{from: location}}
            replace
        >

        </Navigate>
    );
};

export default PrivateRoute;