import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    movies {
      id
      title
      rating
    }
  }
`;

// const query = gql`
//   {
//     user(id: 5) {
//       firstName
//       lastName
//     }
//   }
// `;
