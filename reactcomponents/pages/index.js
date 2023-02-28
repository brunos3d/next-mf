import Head from 'next/head'
import Button from '../components/Button'
import MovieCard from '../components/MovieCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          React Components
        </h1>

        <Button />
        <MovieCard />
      </main>
    </div>
  )
}
