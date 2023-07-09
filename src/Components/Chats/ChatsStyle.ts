import { styled } from '@mui/system';

const standardPadding = '0.5em';
const bubbleBorderRadius = '17px';

const botMixin = {
 // background: '#393e46',
  //color: '#f7f7f7',
  border: '1px solid #1563e0',
  color: 'black',
  alignSelf: 'flex-start',
};

const userMixin = {
  border: '1px solid #e5dfdf',
  color: '#1563e0',
  alignSelf: 'flex-end',
};

export const MessageContainer = styled('div')({
  overflowY: 'scroll',
  marginBottom: '2em',
  paddingRight:'1em',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
  },

  '.message': {
    maxWidth: '400px',
    padding: standardPadding,
    borderRadius: bubbleBorderRadius,
    overflowWrap: 'break-word',
  },

  '.user': {
    ...userMixin,
  },

  '.bot': {
    ...botMixin,
  },

  '.options': {
    background: 'white',
    display: 'flex',
    alignItems: 'center',

    '> div:first-child': {
      fontSize: '1.3em',
      margin: '0.7em 0.7em 0.9em 0.3em',
      transform: 'rotate(90deg)',

      '& i': {
        color: '#393e46',
        animation: 'arrow-move 1.2s infinite',

        '@keyframes arrow-move': {
          '0%': {
            transform: 'translateY(4px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(4px)',
          },
        },
      },
    },

    'p': {
      padding: standardPadding,
      marginRight: '0.8em',
      ...botMixin,
      borderRadius: bubbleBorderRadius,

      '&:hover': {
        opacity: 0.7,
        cursor: 'pointer',
      },
    },
  },

  '.dummy-div': {
    padding: '0.5em 0',
  },
});
