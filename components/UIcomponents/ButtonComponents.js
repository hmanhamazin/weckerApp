const buttonStyles = {
  button: {
    '--green': '#1BFD9C',
    fontSize: 50,
    padding: '3.5em 4em', 
    letterSpacing: 0.06,
    position: 'relative',
    fontFamily: 'inherit',
    borderRadius: 0.6,
    overflow: 'hidden',
    transition: 'all 0.3s',
    lineHeight: 1.4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'var(--green)',
    background: 'linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60%, rgba(27, 253, 156, 0.1) 100%)',
    color: 'var(--green)',
    boxShadow: 'inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1)',
    flex: 1,
  },
  'button:hover': {
    color: '#82ffc9',
    boxShadow: 'inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2)',
  },
  'button:before': {
    content: '""',
    position: 'absolute',
    left: '-4em',
    width: '4em',
    height: '100%',
    top: 0,
    transition: 'transform .4s ease-in-out',
    background: 'linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%,rgba(27, 253, 156, 0.1) 60%, transparent 100%)',
  },
  'button:hover:before': {
    transform: 'translateX(15em)',
  },
};

export default buttonStyles;
