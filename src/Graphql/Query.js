import { gql } from "@apollo/client";
export const movies = gql`
    query Movies($searchString: String!) {
        movies(searchString: $searchString) {
            Title
            Year
            Type
            Poster
            imdbID
        }
    }
`;
