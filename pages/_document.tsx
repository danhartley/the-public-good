import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-GB" dir="ltr">
        <Head>
          <meta http-equiv="content-type" content="text/html" />
        </Head>
        <body
          style={
            'background-color:rgb(250, 255, 250); margin: 0 calc(.75rem + 1vw) .5rem calc(.75rem + 1vw);' as React.CSSProperties
          }
        >
          <Main />
          <NextScript />
          <script async defer src="https://scripts.withcabin.com/hello.js"></script>
          {/* <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
          <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="danhartley" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://pt.linkedin.com/in/danhartley?trk=profile-badge">Daniel Hartley</a></div>               */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
