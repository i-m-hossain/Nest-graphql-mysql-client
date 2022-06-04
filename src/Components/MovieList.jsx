import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { movies } from "../Graphql/Query";
import Movie from "./Movie";

const MovieList = () => {
    const searchString = "spider"; //this can be implemented with a searchbar
    const { loading, error, data } = useQuery(movies, {
        variables: { searchString },
    });
    // const { loading, error, data } = useQuery(movies);
    const [allMovies, setAllMovies] = useState([]);
    useEffect(() => {
        setAllMovies(data?.movies);
    }, [data]);

    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                    <Nav className="me-auto">
                        <Link
                            to="/movieList"
                            className="text-decoration-none text-black"
                        >
                            Home
                        </Link>
                    </Nav>
                    <Nav>
                        <h6> Signed in as {`akash`}</h6>
                    </Nav>
                </Container>
            </Navbar>

            <Container style={{ marginTop: "60px" }}>
                <h5>Available Movies</h5>
                <Row>
                    {allMovies?.map((movie, index) => (
                        <Col key={index}>
                            <Movie movie={movie} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default MovieList;
