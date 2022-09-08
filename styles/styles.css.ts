import { style, globalStyle } from '@vanilla-extract/css';
import {
  atoms,
  media,
  typography,
  colorTheme,
  radii,
  fontWeight,
} from '@zoralabs/zord';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

export const imageWrapper = style([
  {
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
    borderBottom: '2px solid #F0F0F0',
  },
  // {
  //   ':hover': {
  //     transition: '0.4s ease',
  //     opacity: '0.8',
  //   },
  // },
  atoms({
    // borderRadius: 'curved',
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

export const collectButton = style([
  {
    borderRadius: '8px 8px',
    border: '2px solid #F0F0F0',
    boxShadow: '2px 2px #F0F0F0',
    // borderTop: '2px solid #F0F0F0',
    // borderLeft: '0',
    // borderRight: '0',
    // borderBottom: '0',

  },
  {
    ':hover': {
        transition: '0.4s ease',
        transform: 'scale(1.02)',
        boxShadow: '0px 0px #F0F0F0',
    },
  },
  atoms({
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
    textDecoration: 'underline',
  },
  {
    ':hover': {
      color: '#673ab7',
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
