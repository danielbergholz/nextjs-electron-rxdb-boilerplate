import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { addPouchPlugin, createRxDatabase, getRxStoragePouch } from 'rxdb'

addPouchPlugin(require('pouchdb-adapter-idb'))

function Home() {
  const createDB = async () => {
    const db = await createRxDatabase({
      name: 'heroesdb', // <- name
      storage: getRxStoragePouch('idb'), // <- storage-adapter
    })
    console.dir(db)
  }

  useEffect(() => {
    createDB()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  )
}

export default Home
