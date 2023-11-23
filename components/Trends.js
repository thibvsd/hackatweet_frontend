import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../reducers/likes';
import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Trends(props) {

	//const dispatch = useDispatch();
	//const user = useSelector((state) => state.user.value);
        
    /* select in collection tweet =>
    UserModel.find({}).sort({firstName: 1, lastName:1 ,email:1, createdAt:1 , updatedAt: 1 })
    */

    
    const user = {};
	const handleLikeClick = () => {
		if (!user.token) {
			return;
		}
        /*
		fetch(`http://localhost:3000/users/like/${user.token}`)
			.then(response => response.json())
			.then(data => {
				if (data.result && data.canBookmark) {
					if (props.isBookmarked) {
						dispatch(removeLike(props));
					} else {
						dispatch(addLike(props));
					}
				}
			}); */
	}

	let iconStyle = {};
	if (props.isLiked) {
		iconStyle = { 'color': '#E9BE59' };
	}

	return (
		<div className={styles.topContainer}>
			<img src={props.urlToImage} className={styles.image} alt={props.title} />
			<div className={styles.topText}>
				<h2 className={styles.topTitle}>{props.title}</h2>
				<FontAwesomeIcon onClick={() => handleLikeClick()} icon={faHeart} style={iconStyle} className={styles.likeIcon} />
				<h4>{props.author}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

export default Trends;