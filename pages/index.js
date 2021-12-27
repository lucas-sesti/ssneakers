import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SSneakers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bem vindo à SSneakers!" />
        <p className="description">
          Site em construção!
        </p>
      </main>

      <Footer />
    </div>
  )
}
