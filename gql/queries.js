import { gql } from '@apollo/client';

export const NEW_DROPS = gql`
  query {
    erc721Drops(
      orderBy: createdAt
      orderDirection: desc
      first: 24
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

export const FREE_DROPS = gql`
  query {
    erc721Drops(
      orderBy: createdAt
      orderDirection: desc
      first: 96
      where: { salesConfig_: { publicSalePrice: "0" } }
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
