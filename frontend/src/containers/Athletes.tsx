import { useQuery, gql } from "@apollo/client";

const COUNTRIES = gql`
  query {
    athletes {
      id
      name
      gender
      country {
        name
        code
      }
    }
  }
`;

const Athletes = ({ render }) => {
  const { loading, error, data, refetch } = useQuery(COUNTRIES, {
    notifyOnNetworkStatusChange: true,
  });
  return render({ data: data?.athletes, loading, refetch });
};

export default Athletes;
