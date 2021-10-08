// import { useQuery, gql } from "@apollo/client";
import graphql from "babel-plugin-relay/macro";
import SportsComponent, { SportsProps } from "../components/Sports";
import { withLazyLoadQuery } from "../lib/";

// const SPORTS = graphql`
//   query SportsQuery{
//     sports {
//       edges {
//         node {
//           id
//           name
//         }
//       }
//     }
//   }
// `;

const Sports = withLazyLoadQuery<SportsProps>(
  SportsComponent,
  graphql`
    query SportsQuery {
      sports {
        ...Sports_edges
      }
    }
  `,
  {}
);

export default Sports;
