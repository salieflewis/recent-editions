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
  background: 'black',
  // fontFamily: 'Inter',
});

export const cardWrapper = style([
  {
    objectFit: 'contain',
  },
  {
    ':hover': {
      transform: 'scale(1.05)',
      transition: '0.4s ease',
    },
  },
  atoms({
    size: ['x64', 'x64'],
  }),
]);

export const headingWrapper = style([
  {
    backgroundColor: 'black',
    zIndex: '10',
  },
  atoms({
    pl: 'x6',
    py: 'x8',
    w: '100vw',
    mb: 'x16',
    pos: 'fixed',
  }),
]);

export const linkWrapper = style([
  {
    textDecoration: 'underline',
  },
  {
    ':hover' : {
      color: '#673ab7',
    }
  }
])

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
