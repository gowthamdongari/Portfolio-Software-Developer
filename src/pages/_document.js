import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <meta name="robots" content="index, follow" />
        <meta name="description" content="Gowtham Dongari, software developer, Southern Methodist University student masters, income tax, gowtham, dongari, full stack developer, open source, Dallas, Urban Rebox" />
        <meta name="author" content="Gowtham Dongari" />
        <meta name="keywords" content="Gowtham Dongari, software developer, Southern Methodist University, SMU, master's student, income tax, Urban Rebox, full stack developer, open source, Dallas" />
        <link rel="canonical" href="gowthamdongari.com" /> {/* Update with your actual URL */}
        <meta property="og:title" content="Gowtham Dongari | Portfolio Page" />
        <meta property="og:description" content="Gowtham Dongari, software developer, Southern Methodist University student masters, income tax, gowtham, dongari, full stack developer, open source, Dallas, Urban Rebox" />
        <meta property="og:url" content="https://gowthamdongari.com" /> {/* Update with your actual URL */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/profile/Professional_9.png" /> {/* Update with your actual image path */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
