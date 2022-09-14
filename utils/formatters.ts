
/**
 * Appends the ipfs gateway url to make links usuable
 * @param ipfsHash 
 */
export const appendIpfsGateway = (ipfsHash: string) => {
  // https://ipfs.io/ipfs/
  // https://zora-dev.mypinata.cloud/ipfs
  return `https://zora-dev.mypinata.cloud/ipfs/${ipfsHash}`;
};


// Adds a prefix to the image URI to make it a valid URL, in case it's an IPFS hash
export const processImgURI = (url?: string | null | undefined) => {
  if (!url) {
    return null;
  }

  const replacedUrl = url.replace('ipfs://', '');

  if (replacedUrl !== url) {
    return appendIpfsGateway(replacedUrl);
  } else {
    return url;
  }
};
