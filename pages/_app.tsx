import { AppProps } from 'next/app'
import '../styles/index.css'

// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
