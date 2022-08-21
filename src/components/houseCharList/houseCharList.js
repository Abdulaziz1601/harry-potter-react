import { useEffect, useState } from 'react';

import CharCard from './charCard';
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";
import { Row } from 'reactstrap';

import useHpService from '../../services/hpService';

function HouseCharList({ house }) {
    const [houseChars, setHouseChars] = useState(null);
    const { getHouseChars, loading, error, clearError } = useHpService();

    useEffect(() => {
        const updateHouses = async (house) => {
            clearError();
            setHouseChars(await getHouseChars(house));
        }

        updateHouses(house)
            .catch(console.error);
    }, [house]);

    const renderChars = (arr) => {
        return arr.map((char, i) => (
            <CharCard data={char} key={i} />
        ));
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading || !houseChars) ? renderChars(houseChars) : null;

    return (
        <Row>
            {errorMessage}
            {spinner}
            {content}
        </Row>
    )
}


export default HouseCharList