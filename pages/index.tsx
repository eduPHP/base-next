import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Proxetinho Pae</title>
        <meta
          name="description"
          content="Fazendo um projetinho ae pra faze dieta pae"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-20 bg-green-700 text-white">
        <div className="container mx-auto py-4 text-2xl">Site base</div>
      </header>

      <main className="flex-1 mx-auto py-3 container">Hellpp</main>

      <footer className="h-20 mx-auto pt-4 container">
        made with <span className="text-red-600">❤</span> by
        <Link href="https://rdo.blog.br">
          <a className="text-blue-300">edu@rdo</a>
        </Link>
      </footer>
    </div>
  )
}
