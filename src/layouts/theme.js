const theme = {
  colors: {
    dark: '#000',
    white: '#fff',
    gray: '#cdcdcd',
    green: '#47bb8e',
    blue: '#20c6e3',
    yellow: '#dbcd35',
    orange: '#ee9b37',
    purple: '#133c82',
    pink: '#5a4896',
    red: '#bf2f29',
    gradients: {
      green: `linear-gradient(20deg, #47bb8e, #20c6e3)`,
      yellow: `linear-gradient(20deg, #dbcd35, #ee9b37)`,
      orange: `linear-gradient(20deg, #ee9b37, #dbcd35)`,
      purple: `linear-gradient(20deg, #133c82, #5a4896)`,
      pink: `linear-gradient(80deg, #f364b3, #bf2f29)`,
    },
    shadows: {
      yellow: `rgba(219, 205, 53, .5)`,
      orange: `rgba(238, 155, 55, .5)`,
    },
  },
  buttons: {
    white: {
      background: '#fff',
      color: '#fff',
    },
    green: {
      background: `linear-gradient(20deg, #47bb8e, #20c6e3)`,
      color: '#fff',
    },
    'white-green': {
      background: '#fff',
      color: `linear-gradient(20deg, #47bb8e, #20c6e3)`,
    },
    yellow: {
      background: `linear-gradient(20deg, #dbcd35, #ee9b37)`,
      color: '#fff',
    },
    'white-yellow': {
      background: '#fff',
      color: `linear-gradient(20deg, #dbcd35, #ee9b37)`,
    },
    purple: {
      background: `linear-gradient(20deg, #133c82, #133c82)`,
      color: '#fff',
    },
    orange: {
      background: `linear-gradient(20deg, #ee9b37, #dbcd35)`,
      color: '#fff',
    },
    'white-orange': {
      background: '#fff',
      color: `linear-gradient(20deg, #ee9b37, #dbcd35)`,
    },
  },
  transition: 'all 0.3s ease-in-out',
}

export default theme
