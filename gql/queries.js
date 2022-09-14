import { gql } from 'graphql-request';

export const GET_NEW_DROPS = gql`
  query ERC721Drops($first: Int, $skip: Int) {
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

export const GET_FREE_DROPS = gql`
query FreeERC721Drops($first: Int, $skip: Int, $orderDirection: String) {
  erc721Drops(
    orderBy: createdAt
    orderDirection: desc
    first: $first
    skip: $skip
    where: {salesConfig_: {publicSalePrice: "0"}}
  ) {
    name
    address
    createdAt
    owner
    symbol
    salesConfig {
      publicSalePrice
    }
    id
    editionMetadata {
      imageURI
      id
    }
  }
}
`