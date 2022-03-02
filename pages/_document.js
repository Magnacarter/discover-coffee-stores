import Document, { Head, Html, Main, NextScript } from 'next/document'

// Any time you make changes to document or _app.js, restart the server
class MyDocument extends Document {
  render() {
    // We're accessing the core next/document class for access to the global scope
    // of both the body and Head tags.
    return <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/IBMPlexSans-Bold.ttf" as="font" crossOrigin="anonymous"></link>
        <link rel="preload" href="/fonts/IBMPlexSans-Regular.ttf" as="font" crossOrigin="anonymous"></link>
        <link rel="preload" href="/fonts/IBMPlexSans-SemiBold.ttf" as="font" crossOrigin="anonymous"></link>
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument