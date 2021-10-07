// import { useQuery, gql } from "@apollo/client";
import graphql from "babel-plugin-relay/macro";
import AthletesComponent, { AthletesProps } from "../components/Athletes";
import { withLazyLoadQuery } from "../lib/";

// const COUNTRIES = gql`
//   query {
//     athletes {
//       id
//       name
//       gender
//       country {
//         name
//         code
//       }
//     }
//   }
// `;

const Athletes = withLazyLoadQuery<AthletesProps>(
  AthletesComponent,
  graphql`
    query AthletesQuery {
      athletes {
        ...Athletes_edges
      }
    }
  `,
  {}
);

export default Athletes;
