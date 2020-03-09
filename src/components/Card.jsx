import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const Card = (props) => {
    return(
        <div className="card-container">
            <Link className="link-a" to={`/mexico/vcard/gen_scifi/${props.title}/${props.id}`}>
                <picture>
                    <img alt={`card-img-${props.alt}`} src={props.src} />
                    <span className='play'>
                        <i className="fa fa-play-circle-o icon-play"></i>
                    </span>
                </picture>
                
            </Link>
        </div>
    );
}

export default Card;