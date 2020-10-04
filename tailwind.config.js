module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.(js|ts)',
      'nuxt.config.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      screens: {
        xs: {
          max: '374px',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans JP',
          'Hiragino Sans',
          'Meiryo',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        poppins: [
          'Poppins',
          'system-ui',
          '-apple-system',
          'Hiragino Kaku Gothic ProN',
          'Noto Sans JP',
          'Hiragino Sans',
          'Meiryo',
        ],
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      colors: {
        primary: {
          default: '#1890FF',
        },
        secondary: {
          default: '#000',
        },
        secondaryYellow: {
          default: '#fadb14',
        },
      },
      opacity: {
        10: '0.1',
      },
    },
    zIndex: {},
  },
  variants: {},
  plugins: [],
}
