import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTwitter, faUser } from '@fortawesome/free-solid-svg-icons';

import { FaTwitter } from 'react-icons/fa';

import { login, logout } from '../reducers/user';

import Head from 'next/head';
import styles from '../styles/Login.module.css';
import Moment from 'react-moment';
import { Modal, Button } from 'antd';
import Link from 'next/link';

import SignIn from './SignIn';
import SignUp from './SignUp';

//import { removeAllBookmark } from '../reducers/bookmarks';
//import { unhideArticles } from '../reducers/hiddenArticles';

function Login() {

	/*const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value)
	const [date, setDate] = useState('2050-11-22T23:59:59');*/

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [activeComponent, setActiveComponent] = useState(null);

	const handleCancel = () => {
		setIsModalVisible(false);
	  };

	const handleLogout = () => {
		dispatch(logout());
		//dispatch(removeAllBookmark());
	};
	const showModal = (component) => {
		setActiveComponent(component);
		setIsModalVisible(!isModalVisible);
	};

    //let user = false;
	let modalContent;
	//if (!user.isConnected) {
  if (!user) {
		modalContent = (
			<div className={styles.registerContainer}>
				<div className={styles.registerSection}>
				{activeComponent === 'signUp' && <SignUp />}
				{activeComponent === 'signIn' && <SignIn />}
				</div>
			</div>
		);
	}
	console.log('act comp=', activeComponent);
	return (
		<>
		<header className={styles.header}>
			{isModalVisible && <div id="react-modals">
				<Modal  center mask={true} maskstyle={{ backgroundcolor: "red" }}
					classNames={{
					overlay: 'customOverlay',
					modal: 'customModal',
				}} getContainer="#react-modals" open={isModalVisible} closable={false} footer={[
				<Button key="close" onClick={handleCancel}>
					X
				</Button>
				]}>

				<div className={styles.registerContainer}>
					<div className={styles.registerSection}>
						{activeComponent === 'signIn' && <SignIn />}
						{activeComponent === 'signUp' && <SignUp />}
					</div>
				</div>
				</Modal>
			</div>}
		</header >
		<div className={styles.container}>
			<div className={styles.col_back}>
				<FaTwitter />
			</div>
			<div className={styles.col_sign}>
				<FaTwitter />
				<div className={styles.content}>
					<h1>See what's<br />happening</h1>
				</div>
				<h2>Join Hackatweet today.</h2>
				<button onClick={() => showModal('signUp')}>Sign up</button>
				<p><strong>Already have an account ?</strong></p>
				<button onClick={() => showModal('signIn')}>Sign in</button>
			</div>
		</div>
		</>
	);

}

export default Login;
