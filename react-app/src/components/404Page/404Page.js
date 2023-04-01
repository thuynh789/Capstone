import cat from '../Images/oh-no.png'
import { Link } from 'react-router-dom';
import './404Page.css'

export default function ErrorCat() {
	return (
		<div className='fullErrorDiv'>
			<div className='errorImgDiv'>
                <img
                    src= {cat}
                    alt='lost cat'
                    />
                <div className='message'>
                    <div className='four'>
                        404 Page Not Found
                    </div>
                    Meow-sorry! Can't find what you're looking for, hooman.
                    <br />
                    Maybe my fluffy paws accidentally pressed a wrong button. 😿
                    <div className='redirect'>
                        <Link to='/home'>Click here to go back</Link>
                    </div>
			    </div>
            </div>
		</div>
	);
}
