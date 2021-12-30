import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    return (
      <Html lang="en" dir="ltr">
        <Head>
            <meta http-equiv="content-type" content="text/html;"></meta>
        </Head>
        <body style={"background-color:rgb(255, 255, 255); margin: 0 calc(.75rem + 1vw) .5rem calc(.75rem + 1vw);" as React.CSSProperties}>
          <Main />
          <NextScript />
          <script async defer src="https://scripts.withcabin.com/hello.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument