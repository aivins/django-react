import { useQuery, gql } from "@apollo/client";

const COUNTRIES = gql`
  query {
    sports {
      id
      name
    }
  }
`;

const Sports = ({ render }) => {
  const { loading, error, data, refetch } = useQuery(COUNTRIES, {
    notifyOnNetworkStatusChange: true,
  });
  return render({ data: data?.sports, loading, refetch });
};

export default Sports;
