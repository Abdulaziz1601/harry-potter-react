import { useParams } from 'react-router-dom';

import HouseCharList from '../houseCharList'
import {Container} from 'reactstrap';

const HousePage = () => {
    const { house } = useParams()

    return (
        <Container>
            <HouseCharList house={house}/>    
        </Container>
    );
};


export default HousePage;
