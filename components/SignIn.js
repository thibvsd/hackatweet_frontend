import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import styles from '../styles/Login.module.css';
import { FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router'

function SignIn(props) {

	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

	const [isModalVisible, setIsModalVisible] = useState(false);
	/*const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);*/

    const router = useRouter();
    const handleConnection = () => {

        console.log('signin', signInUsername );

        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    setIsModalVisible(false);
                    console.log('modal signin', isModalVisible );
                    router.replace('/home');
                }else {
                    console.log('modal signin', isModalVisible );
                }
            });
    };

	return (
        <div className={styles.registerSection}>
            <FaTwitter />
            <p>Connect to Hackatweet</p>
            <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
            <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
            <button id="connection" onClick={() => handleConnection()}>Sign in</button>
        </div>
	);
}

export default SignIn;
