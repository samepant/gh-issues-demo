import React from 'react';

import IssueList from './components/IssueList';

const App = () =>
  <div className='main'>
    <h1>Recent Open Issues for the Cosmos-sdk</h1>
    <IssueList />
    <style jsx global>
    {`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        background: #590059;
        font-size: calc(1vmin + 10px);
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      * {
        box-sizing: border-box;
      }

      .main {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1em;
      }
    `}
    </style>
  </div>

export default App;
