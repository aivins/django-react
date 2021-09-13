async function fetchGraphQL(text, variables) {
  //   const TOKEN = 'token';
  const response = await fetch("http://localhost:8001/graphql", {
    method: "POST",
    headers: {
      //   Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: text, variables }),
  });
  return await response.json();
}
export default fetchGraphQL;
