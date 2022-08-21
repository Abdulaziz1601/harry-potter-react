import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import useHpService from '../../services/hpService';

import styled from 'styled-components';
import './charDetails.css';

const CharImg = styled.img`
    width: 400px;
    height: 160px;
    object-fit: contain
`;

const CharDetails = (props) => {

    const { loading, error, clearError, getCharacter } = useHpService();

    const [char, setChar] = useState(null);

    useEffect(() => {
        clearError();
        updateChar()
    }, [props.charId]);


    const onCharDetailsLoaded = (char) => {
        setChar(char);
    };

    const updateChar = () => {
        const { charId } = props;

        if (charId === null) {
            return;
        }

        getCharacter(charId)
            .then(onCharDetailsLoaded);
    }

    if (!char && error) return <ErrorMessage />

    else if (!char) return <span className="select-error">Please select a character</span>

    const { name, gender, born, house, actor, image } = char;
    if (loading) {
        return (
            <div className="char-details rounded">
                <Spinner color='blue' />
            </div>
        )
    }
    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <div className='d-flex justify-content-between flex-column align-items-center'>
                <CharImg src={image} alt={name} className="w-40" />
                <ul className="list-group list-group-flush w-50 d-flex">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">House</span>
                        <span>{house}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Actor</span>
                        <span>{actor}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CharDetails;