import { gql } from '@apollo/client';

const OPEN_ISSUES = gql`
  query {
    repository(owner: "cosmos", name: "cosmos-sdk" ) {
    issues(first: 50, states:OPEN, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          title
          url
          author {
            login
            url
            avatarUrl
          }
          number
          createdAt
          state
          closed
          comments {
            totalCount
          }
          labels(first: 10) {
            edges {
              node {
                color
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

const queries = {
  OPEN_ISSUES,
}

export default queries;