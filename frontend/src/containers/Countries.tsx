import { useQuery, gql } from "@apollo/client";

const COUNTRIES = gql`
  query {
    countries {
      id
      name
      code
    }
  }
`;

const Countries = ({ render }) => {
  const { loading, error, data, refetch } = useQuery(COUNTRIES, {
    notifyOnNetworkStatusChange: true,
  });
  return render({ data: data?.countries, loading, refetch });
};

export default Countries;
