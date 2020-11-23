import React from 'react';
import { useQuery } from '@apollo/client';

import Issue from './Issue';
import issueQueries from '../../lib/apollo/queries/issues';

const IssuesList = () => {
  const { loading, error, data } = useQuery(issueQueries.OPEN_ISSUES);

  if (loading) return (
    <div>
      <p>Loading...</p>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 200px;
          }
          p {
            font-size: 3em;
          }
        `}
      </style>
    </div>
  );

  const sortedIssues = data.repository.issues.edges;

  return (
    <ul>
      {sortedIssues.map((issue: Issue) => (
        <Issue key={issue.node.number} {...issue} />
      ))}
      <style jsx>
        {`
          ul {
            padding: 0;
            list-style: none;
          }
        `}
      </style>
    </ul>
  )
}

export default IssuesList;