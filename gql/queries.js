import { gql } from '@apollo/client';

export const newDrops = gql`
  query {
    erc721Drops(
      orderBy: createdAt
      orderDirection: desc
      first: 96
    ) {
      name
      address
      owner
      symbol
      editionMetadata {
        imageURI
      }
      salesConfig {
        publicSalePrice
      }
    }
  }
`;