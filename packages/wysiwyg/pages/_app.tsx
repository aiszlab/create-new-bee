import { FC } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'

interface Props<P extends {} = {}> {
  Component: FC<P>
  pageProps: P
}

export default function _App({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
