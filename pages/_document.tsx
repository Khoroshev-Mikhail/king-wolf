import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>King Wolf</title>
        <meta httpEquiv="content-language" content="en" />
        <link rel="shortcut icon" href="/images/wolf-ticker.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
