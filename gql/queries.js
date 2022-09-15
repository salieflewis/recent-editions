import { gql } from 'graphql-request';

export const GET_NEW_DROPS = gql`
  query AllERC721Drops($limit: Int, $offset: Int) {
    erc721Drops(
      orderBy: createdAt
      orderDirection: desc
      first: $limit
      skip: $offset
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
query FreeERC721Drops($limit: Int, $offset: Int, $orderDirection: String) {
  erc721Drops(
    orderBy: createdAt
    orderDirection: desc
    first: $limit
    skip: $offset
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