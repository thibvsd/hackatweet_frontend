import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import styles from '../styles/Login.module.css';
import { FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router'

import { Modal, Button } from 'antd';

function SignUp(props) {

    const dispatch = useDispatch();
    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpName, setSignUpName] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);
    const router = useRouter();

    const handleRegister = () => {
        
        console.log('signup', signUpUsername );

        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signUpUsername, name: signUpName, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signUpUsername, name: signUpName, token: data.token, _id: data._id, name: data.name }));
                    setSignUpUsername('');
                    setSignUpName('');
                    setSignUpPassword('');
                    setIsModalVisible(false);
                    console.log('modal signup', isModalVisible );
                    router.replace('/home');
                } else {
                    setIsModalVisible(false);
                    console.log('modal signin', isModalVisible );
                }
            });
        };

	return (
        <div className={styles.registerSection}>
            <FaTwitter />
            <h3>Create your Hackatweet account</h3>
            <input type="text" placeholder="Name" id="signUpName" onChange={(e) => setSignUpName(e.target.value)} value={signUpName} />            
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <button id="register" onClick={() => handleRegister()}>Sign up</button>
        </div>
	);
}
export default SignUp;
