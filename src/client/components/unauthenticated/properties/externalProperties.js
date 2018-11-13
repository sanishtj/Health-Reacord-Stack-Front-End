export const customStyles = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    padding: '2px',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem',
  },
};

export const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: '/videos/1.mp4',
      type: 'video/mp4',
    },
  ],
};
