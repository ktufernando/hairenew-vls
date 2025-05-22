import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from "@vercel/analytics/next"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
