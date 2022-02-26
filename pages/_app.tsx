import type { AppProps } from 'next/app'
import 'tachyons/css/tachyons.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
