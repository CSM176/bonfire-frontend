import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Cocogoose';
        src: url('../public/fonts/Cocogoose.woff2') format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'CocogooseBold';
        src: url('../public/fonts/CocogooseBold.woff2') format('woff2');
      `}
  />
)

export default Fonts