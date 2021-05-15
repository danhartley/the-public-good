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
            <meta http-equiv="content-type" content="text/html;charset=utf-8"></meta>
        </Head>
        <body style={"background-color:rgb(255, 255, 247)" as React.CSSProperties}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument