import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Image from "next/image";
import Logo from "../assets/pineapple.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../reducers/user';

function Left(props) {

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);
    const router = useRouter();

	const handleLogout = () => {
		dispatch(logout());
		console.log('logout');
		router.replace('/');
	};

	return (
		<>		
		<div className={styles.leftSidebar}>
			<div><FaTwitter /></div>
			<div><h1><Image width={25} height={50} src={Logo} alt="pineapple" /> {user.name}</h1><h2>@{user.username}</h2>			
			<FontAwesomeIcon onClick={() => handleLogout()} icon={faRightFromBracket} className={styles.faIcon} />
			</div>
		</div>
		</>
	);
}

export default Left;
