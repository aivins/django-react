import { useQuery, gql } from "@apollo/client";

const COUNTRIES = gql`
  query {
    countries {
      name
      code
      athletes {
        name
        medals {
          medal
          event {
            sport {
              name
            }
          }
        }
      }
    }
  }
`;

const Medals = ({ render }) => {
  const { loading, error, data, refetch } = useQuery(COUNTRIES, {
    notifyOnNetworkStatusChange: true,
  });

  const medalData = [];
  if (data) {
    data.countries.forEach((country) => {
      const countryData = {
        country: country.name,
        country_code: country.code,
        gold: 0,
        silver: 0,
        bronze: 0,
        total: 0,
      };
      country.athletes.forEach((athlete) => {
        athlete.medals.forEach((medal) => {
          countryData[medal.medal.toLowerCase()] += 1;
          countryData.total += 1;
        });
      });
      medalData.push(countryData);
    });
  }

  const initialSort = medalData.sort((a, b) => {
    const gold = b.gold - a.gold;
    const silver = b.silver - a.silver;
    const bronze = b.bronze - a.bronze;
    const total = b.total - a.total;

    if (gold == 0) {
      if (silver == 0) {
        if (bronze == 0) {
          if (total == 0) {
            return 0;
          } else {
            return total;
          }
        } else {
          return bronze;
        }
      } else {
        return silver;
      }
    } else {
      return gold;
    }
  });

  return render({ data: initialSort, loading, refetch });
};

export default Medals;
