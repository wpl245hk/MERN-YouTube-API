import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import httpsBackend from './backend.js';

const Login = (props) => {
    let initialNewUser = {
        username: "",
        password: "",
        formation: {}
    }

    const [newUser, setNewUser] = useState(initialNewUser);
    const onChangeUserName = event => {
        const { name, value } = event.target;
        setNewUser({...newUser, [name]: value}); 
    }

    const navigate = useNavigate()
    const loginWithUser = () => {
        httpsBackend.mongodbGetFunction(newUser)
        .then(response => {
            if (response.data) {
                props.login(response.data);
            } else {
                props.login(newUser);}
            navigate('/'); 
        })
        .catch(e => {
            console.error(e);}
        )
    }

    return (
        <div className='login'>
            <label for="username">User Name</label>
            <input
                type="text"
                placeholder="ABC"
                id="username"
                name="username"
                value={newUser.username}
                onChange={onChangeUserName}
                required
            />
            <label for="password">User Password</label>
            <input
                type="text"
                placeholder="123"
                id="password"
                name="password"
                value={newUser.password}
                onChange={onChangeUserName}
                required
            />
            <button onClick={loginWithUser}>Submit</button>
        </div>
    )
};

export default Login;