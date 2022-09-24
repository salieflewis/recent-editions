import { style, globalStyle } from '@vanilla-extract/css';
import { atoms, media, typography, colorTheme, radii, fontWeight } from '@zoralabs/zord';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

export const activeLinkWrapper = style([
  {
    color: '#D9D9D9',
  },
]);

export const nullImageWrapper = style([
  {
    borderBottom: '2px solid #F0F0F0',
  },
  atoms({
    size: ['x64', 'x64'],
  }),
]);

export const imageWrapper = style([
  {
    aspectRatio: '1/1',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
    borderBottom: '2px solid #F0F0F0',
  },
  atoms({
    size: ['x64', 'x64'],
  }),
]);

export const cardWrapper = style([
  {
    border: '2px solid #F0F0F0',
  },
  atoms({
    borderRadius: 'curved',
  }),
]);

export const connectButtonStyle = style([
  {
    backgroundColor: 'white',
    border: '2px solid #F0F0F0',
    boxShadow: '2px 2px #F0F0F0',
    textAlign: 'center',
  },
  {
    ':hover': {
      backgroundColor: '#F0F0F0',
      transition: '0.4s ease',
      transform: 'scale(1.02)',
      boxShadow: '0px 0px #F0F0F0',
      cursor: 'pointer',
    },
  },
  atoms({
    borderRadius: 'curved',
    p: 'x4',
    w: 'auto',
  }),
]);

export const collectButton = style([
  {
    borderRadius: '8px 8px',
    border: '2px solid #F0F0F0',
    boxShadow: '2px 2px #F0F0F0',
    textAlign: 'center',
  },
  {
    ':hover': {
      backgroundColor: '#F0F0F0',
      transition: '0.4s ease',
      transform: 'scale(1.02)',
      boxShadow: '0px 0px #F0F0F0',
      cursor: 'pointer',
    },
  },
  atoms({
    p: 'x4',
    width: '100%',
  }),
]);

export const cardTitle = style([
  {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  atoms({
    maxW: 'x32',
  }),
]);

export const headingWrapper = style([
  {
    backgroundColor: 'white',
    zIndex: '2',
  },
  atoms({
    w: '100vw',
    h: 'x24',
    pos: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
]);

export const linkWrapper = style([
  {
    textDecoration: 'none',
  },
  {
    ':hover': {
      color: 'black',
      // textDecoration: 'underline',
    },
  },
]);

// export const hideMobile = style([
//   {
//     '@media': {
//       [media.min1440]: {
//         visibility: 'hidden',
//       },
//     },
//   },
//   atoms({
//     px: 'x6',
//   }),
// ]);
