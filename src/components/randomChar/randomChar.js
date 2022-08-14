import React, { useState, useEffect } from 'react';
import hpService from '../../services/hpService';
import Spinner  from '../spinner';
import ErrorMessage  from '../errorMessage';
import './randomChar.css';

const RandomChar = () => {
    const HpService = new hpService();

    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 3000)

        return () => {
            // clearInterval(timerId);
        };

    }, [])
    
    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
        setError(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random()*24);
        
        setLoading(true);

        HpService.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }
    
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;
    
    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}

const View = ({char}) => {

    const {name, gender, house, dateOfBirth, actor} = char;

    return (
        <React.Fragment>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Actor </span>
                    <span>{actor}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">House </span>
                    <span>{house}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{dateOfBirth}</span>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default RandomChar;