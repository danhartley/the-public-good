import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    const style = {
        backgroundColor: 'rgba(var(--bg),1)'
    };

    return (
      <Html lang="en" dir="ltr">
        <Head>
            <meta http-equiv="content-type" content="text/html;charset=utf-8"></meta>
        </Head>
        <body style={style}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument