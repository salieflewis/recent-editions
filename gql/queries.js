import { gql } from '@apollo/client';

export const newDrops = gql`
  query ($first: Int, $skip: Int) {
    erc721Drops(
      orderBy: createdAt
      orderDirection: desc
      first: $first
      skip: $skip
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