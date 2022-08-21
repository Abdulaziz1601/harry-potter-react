import { useState, useEffect } from 'react';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import useHpService from '../../services/hpService';

import './randomChar.css';

const RandomChar = () => {
    const [char, setChar] = useState({});
    
    const { getCharacter, loading, error, clearError } = useHpService();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000)

        return () => {
            clearInterval(timerId);
        };
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * 24);

        getCharacter(id)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner color='blue' /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}

const View = ({ char }) => {
    const { name, gender, house, dateOfBirth, actor } = char;

    return (
        <>
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
        </>
    )
}

export default RandomChar;