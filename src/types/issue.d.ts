interface IssueLabel {
  node: {
    color: string,
    name: string
  }
}

interface IssueLabels {
  edges: IssueLabel[];
}

interface Issue {
  node: {
    url: string,
    title: string,
    number: number,
    createdAt: string,
    state: string,
    closed: boolean,
    comments: {
      totalCount: number,
    },
    labels: IssueLabels;
    author: {
      login: string,
      url: string,
      avatarUrl: string,
    }
  }
}

interface Issues {
  totalCount: number;
  pageInfo: {
    endCursor: string;
    startCursor: string;
  };
  edges: Issue[];
}