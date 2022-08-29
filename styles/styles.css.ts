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
