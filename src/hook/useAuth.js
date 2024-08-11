import {useContext} from 'react';
import {AuthContext} from "../hoc/AuthProvider";

function UseAuth() {
    return useContext(AuthContext)
}

export default UseAuth;