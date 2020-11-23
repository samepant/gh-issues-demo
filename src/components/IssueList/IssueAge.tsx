import React from 'react';
import * as timeago from 'timeago.js';

const IssueAge = ({issueTimestamp, issueAuthor}: {issueTimestamp: string, issueAuthor?: string}) => 
  <div>
    Opened {timeago.format(issueTimestamp)} {issueAuthor ? `by ${issueAuthor}` : ''}
  </div>

export default IssueAge;