import React, { useState, useEffect } from "react";
import {
    Col,
    Container,
    Row,
    Button,
    Card,
    CardGroup,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardBody
} from "reactstrap";
import { useParams } from 'react-router-dom';
import ErrorMessage from "../errorMessage";
import useHpService from "../../services/hpService";
import Spinner from "../spinner";


const HousePage = () => {
    const [houseChars, setHouseChars] = useState(null);
    const { getHouseChars, loading, error, clearError } = useHpService();

    const { house } = useParams()


    useEffect(async () => {
        await updateHouses(house);
    }, [house]);

    const updateHouses = async (house) => {
        clearError();
        setHouseChars(await getHouseChars(house));
    }

    const renderCards = (arr) => {
        return arr.map((char, i) => (
            <View data={char} key={i} />
        ));
    }

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading || !houseChars) ? renderCards(houseChars) : null;

    return (
        <Container>
            <Row>
                {errorMessage}
                {spinner}
                {content}
            </Row>
        </Container>
    );
};

const View = ({ data }) => {
    const {
        name,
        gender,
        house,
        born,
        actor,
        image,
    } = data;

    return (
        <Col sm="6" lg="3" className="mt-5">
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={image}
                    top
                    width="100%"
                    style={{ "min-height": 300, "max-height": 300 }}
                />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Actor:  {actor}
                    </CardSubtitle>
                    <CardText>
                        <ul className="list-group list-group-flush d-flex">
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
                    </CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>

    )
}

export default HousePage;
