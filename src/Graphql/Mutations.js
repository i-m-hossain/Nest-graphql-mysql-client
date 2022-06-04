import { gql } from "@apollo/client";
export const loginUser = gql`
    mutation login($input: LoginUserInput!) {
        login(loginUserInput: $input) {
            user {
                username
            }
            access_token
        }
    }
`;
export const signupUser = gql`
    mutation signup($input: CreateUserInput!) {
        signup(createUserInput: $input) {
            user {
                username
                email
                password
            }
            access_token
        }
    }
`;
