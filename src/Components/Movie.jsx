import React from "react";
import { Card } from "react-bootstrap";

const Movie = ({ movie }) => {
    const { Title, Year, Type, Poster, imdbID } = movie;
    const handelTicket = (id) => {
        console.log(id);
    };
    return (
        <Card style={{ width: "18rem" }} className="mb-5">
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <div className="d-flex justify-between">
                    <Card.Text>Released year: {Year}</Card.Text>
                    <Card.Text>Movie Type: {Type}</Card.Text>
                </div>
            </Card.Body>
            <Card.Footer
                className="bg-success"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    handelTicket(imdbID);
                }}
            >
                <h4 className="text-center text-white">Buy ticket</h4>
            </Card.Footer>
        </Card>
    );
};

export default Movie;
