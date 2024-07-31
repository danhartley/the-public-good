import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-GB" dir="ltr">
        <Head>
          <meta httpEquiv="content-type" content="text/html" />
        </Head>
        <body
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            margin: '0 calc(.75rem + 1vw) .5rem calc(.75rem + 1vw)',
          }}
        >
          <Main />
          <NextScript />
          <script async defer src="https://scripts.withcabin.com/hello.js"></script>
          {/* <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
          <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="danhartley" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pt.linkedin.com/in/danhartley?trk=profile-badge">Daniel Hartley</a></div>               */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
