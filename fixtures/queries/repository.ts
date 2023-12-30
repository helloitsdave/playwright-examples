const REPOSITORY_QUERY: string = `query Repository($name: String!, $owner: String!) {
  repository(name: $name, owner: $owner) {
    createdAt
    description
    name
  }
}
`;

export default REPOSITORY_QUERY;
