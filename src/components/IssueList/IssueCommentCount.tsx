import React from 'react';

const IssueCommentCount = ({issueCommentCount}: {issueCommentCount: number}) => 
  <div className="count-parent">
    <div className="count">{issueCommentCount}</div>
    <label>💬</label>
    <style jsx>
        {`
          .count-parent {
            bottom: -17%;
            right: 7em;
            position: absolute;
            width: 3em;
            height: 3em;
            border-radius: 50%;
            display:flex;
            justify-content: center;
            align-items: center;
          }
          .count {
            position: relative;
            z-index: 10;
            background: white;
            color: purple;
            font-size: 1.2em;
            padding: 0em 0.4em;
            border-radius: 1em;
            font-weight: bold;
          }
          label {
            position: absolute;
            bottom: -35%;
            right: -2%;
            font-size: 3.2em;
            z-index: 1;
          }
        `}
      </style>
  </div>

export default IssueCommentCount;