import graphql from "babel-plugin-relay/macro";
import Countries from "../components/Countries";
import withLazyLoadQuery from "../lib/withLazyLoadQuery";

// const fragment = graphql`
//   fragment Countries_edges on CountryNodeConnection {
//     edges {
//       node {
//         id
//         name
//         code
//       }
//     }
//   }
// `;

// export default withLazyLoadQuery(
//   Countries,
//   graphql`
//     query CountriesQuery {
//       countries {
//         ...Countries_edges
//       }
//     }
//   `,
//   {}
// );
