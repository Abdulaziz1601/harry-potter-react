import {
    Col,
    Card,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardBody
} from "reactstrap";

const CharCard = ({ data }) => {
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
            <Card tag={'a'} href='#'>
                <CardImg
                    alt="Card image cap"
                    src={image}
                    top
                    width="100%"
                    style={{ "minHeight": 300, "maxHeight": 300, "objectFit": "cover" }}
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
                </CardBody>
            </Card>
        </Col>
    )
};


export default CharCard;
