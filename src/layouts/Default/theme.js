const theme = {
  colors: {
    dark: '#000',
    white: '#fff',
    green: '#47bb8e',
    blue: '#20c6e3',
    yellow: '#dbcd35',
    orange: '#ee9b37',
    purple: '#2369dc',
    pink: '#8f7cfb',
    gradients: {
      green: `linear-gradient(20deg, #47bb8e, #20c6e3)`,
      yellow: `linear-gradient(20deg, #dbcd35, #ee9b37)`,
      purple: `linear-gradient(20deg, #2369dc, #8f7cfb)`,
    },
  },
  buttons: {
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
    purple: {
      background: `linear-gradient(20deg, #2369dc, #8f7cfb)`,
      color: '#fff',
    },
  },
  transition: 'all 0.3s ease-in-out',
}

export default theme
