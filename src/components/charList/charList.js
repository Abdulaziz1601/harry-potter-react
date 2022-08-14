import React, { useState, useEffect } from 'react';
import useHpService from '../../services/hpService'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import styled from 'styled-components';
import './charList.css';

const ListItem = styled.li`
    transition: all .5s;
    :hover {
        background-color: rgba(211,211,211, .7);
        color: #fff;
    }
`;

const CharList = (props) => {
    const {loading, error, clearError, getAllCharacters} = useHpService();

    const [charList, setCharList] = useState(null);
    
    const onCharsUpdated = (chars) => {
        setCharList(chars);
    };

    const updateCharList = () => {
        getAllCharacters()
            .then(onCharsUpdated)
    };

    useEffect(() => {
        clearError();
        updateCharList()
    }, []);

  
    const renderItems = (arr) => {
        return arr.map((item, i) => {
            return (
                <ListItem
                    key={i}
                    className="list-group-item"
                    onClick={() => props.onCharSelected(i)}
                    >
                    {item.name}
                </ListItem>
            ) 
        })
    }

    const errorMessage = error ? <ErrorMessage/> : null; 
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !charList) ? renderItems( charList.slice(0, 10) ) : null;

    return (
        <ul className="item-list list-group">
            {errorMessage}
            {spinner}
            {content}
        </ul>
    );
}

export default CharList;