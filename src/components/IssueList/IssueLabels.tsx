import React from 'react';

const IssueLabel = (labels: IssueLabels) => 
  <ul>
    {labels.edges.map((label: IssueLabel) => (
      <li>
        <label style={{background: `#${label.node.color}`}}>{label.node.name}</label>
      </li>
     ))}
    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        margin: 0.8em 0;
      }
      li {
        margin: 0 0.2em;
      }
      li:first-child {
        margin-left: 0;
      }
      label {
        padding: 0.2em 0.4em;
        border-radius: 0.5em;
        color: #590059;
      }
    `}</style>
  </ul>

export default IssueLabel;