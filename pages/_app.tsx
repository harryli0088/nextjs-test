import { RecoilRoot } from 'recoil'

import "./index.scss"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <RecoilRoot><Component {...pageProps} /></RecoilRoot>
}