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
  // fontFamily: 'Inter',
});

export const imageWrapper = style([
  {
    objectFit: 'cover',
  },
  // {
  //   ':hover': {
  //     transform: 'scale(1.05)',
  //     transition: '0.4s ease',
  //   },
  // },
  atoms({
    size: ['x64', 'x64'],
    borderRadius: 'curved',
  }),
]);

export const cardWrapper = style([
  {
    border: '2px solid #F0F0F0',
  },
  // {
  //   ':hover': {
  //     backgroundColor: '#363636',
  //     transition: '0.5s ease',
  //     border: '2px solid #363636',
  //   }
  // },
  atoms({
    borderRadius: 'curved',
  }),
]);

export const collectButton = style([
  {
    ':hover': {
      color: '#363636',
    },
  },
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
