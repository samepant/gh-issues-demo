import React from 'react';

import IssueCommentCount from './IssueCommentCount';
import IssueLabels from './IssueLabels';
import IssueAge from './IssueAge';

const Issue = (issue: Issue) => 
  <li>
    <a href={issue.node.url}>
      <h2>{issue.node.title}</h2>
      <div className='number'>
        <p>#{issue.node.number}</p>
      </div>
      <IssueLabels {...issue.node.labels} />
      <IssueAge issueTimestamp={issue.node.createdAt} issueAuthor={issue.node.author.login} />
      <IssueCommentCount issueCommentCount={issue.node.comments.totalCount} />
    </a>
    <style jsx>
        {`
          li {
            background: purple;
            border-radius: 2em;
            margin: 1em 0 3em;
            border: 1px solid purple;
            position: relative;
          }
          li:hover {
            border: 1px solid coral;
          }
          .number {
            position: absolute;
            bottom: -13%;
            right: 4em;
            background: orchid;
            font-size: 1.4em; 
            font-weight: bold; 
            padding: 0.2em 0.4em;
            border-radius: 1em;
          }
          .number p {
            margin: 0;
          }
          a {
            display: block;
            padding: 1em 1em 2em;
            color: inherit;
            text-decoration: none;
          }
          h2 {
            margin: 0;
          }
        `}
      </style>
  </li>

export default Issue;