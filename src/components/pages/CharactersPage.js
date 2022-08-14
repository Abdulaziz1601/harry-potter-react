import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharList from '../charList';
import CharDetails from '../charDetails'



const CharactersPage = () => {
    const [randomChar, setRandomChar] = useState(false);
    const [selectedChar, setSelectedChar] = useState(null);
    const [error, setError] = useState(false);

    const toogleRandomChar = () => {
        setRandomChar(!randomChar);
    }

    const onCharSelected = (id) => {
        setSelectedChar(id)
    };

    const isVisible = randomChar ? <RandomChar /> : null;

    if (error) {
        return <ErrorMessage />;
    }

    return (
        <Container>
            <Row>
                <Col lg={{ size: 5, offset: 0 }}>
                    {isVisible}
                    <Button
                        onClick={toogleRandomChar}
                        size="lg"
                        color="info">Toggle Random Char</Button>
                </Col>
            </Row>
            <Row className='chars'>
                <Col md='6'>
                    <CharList onCharSelected={onCharSelected} />
                </Col>
                <Col md='6'>
                    <CharDetails charId={selectedChar} />
                </Col>
            </Row>
        </Container>
    );
}

export default CharactersPage;