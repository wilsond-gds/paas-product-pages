import Document, { Head, Html, Main, NextScript } from 'next/document'
import CookieBanner from '@components/CookieBanner'
import Footer from '@components/Footer'
import Header from '@components/Header'
import javascriptHash from '../public/assets/javascript/manifest.json'
import styleSheetHash from '../public/assets/styles/manifest.json'

class GovukTemplate extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en' className='govuk-template'>
        <Head>
        <link href={`/assets/styles/${styleSheetHash['application.css']}`} rel='stylesheet' />
        </Head>
        <body className='govuk-template__body'>
          <script nonce='**CSP_NONCE_VAL**' dangerouslySetInnerHTML={{ __html: 'document.body.className = ((document.body.className) ? document.body.className + \' js-enabled\' : \'js-enabled\');' }} />
          <a href='#main-content' className='govuk-skip-link' data-module="govuk-skip-link">Skip to main content</a>
          <CookieBanner />
          <Header />
          <Main />
          <Footer />
          <script type='text/javascript' nonce='**CSP_NONCE_VAL**' src={`/assets/javascript/${javascriptHash['application.js']}`} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default GovukTemplate
