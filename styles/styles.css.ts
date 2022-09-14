import { style, globalStyle } from '@vanilla-extract/css';
import {
  atoms,
} from '@zoralabs/zord';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

export const image = style({
  objectFit: 'cover',
  height: '100%',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  width: '100%'
})

export const imageWrapper = style([
  {
    aspectRatio: '1/1',
    position: 'relative',
    borderRadius: '8px 8px 0 0',
    borderBottom: '2px solid #F0F0F0',
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        transition: '0.4s ease',
        opacity: '0.8',
      },
    },
  },
  atoms({
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
    textAlign: 'center'
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
    // pos: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
]);

export const filterWrapper = style({
  position: 'relative',
  display: 'flex',
  paddingLeft: 24,
  zIndex: 2
})

export const filters = style([
  {
    // zIndex: '2',
  }
  , atoms({
    w: '100vw',
    // pos: 'fixed',
    alignItems: 'center',
    gap: 'x3',
    whiteSpace: 'nowrap',
    flexDirection: 'row-reverse',
    pl: 'x4',
    pr: 'x3',
  }),
])

export const linkWrapper = style([
  {
    textDecoration: 'none',
  },
  {
    ':hover': {
      color: 'black',
      textDecoration: 'underline'
    },
  },
]);

export const feedWrapper = style({
  width: '100%',
  maxWidth: 1200,
  paddingTop: 16,
  overflowX: 'hidden',
  margin: 'auto'
})

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
