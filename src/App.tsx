import React from 'react';

function App() {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <style jsx global>
      {`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      `}
      </style>
    </div>
  );
}

export default App;
