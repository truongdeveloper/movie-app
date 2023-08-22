import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { useTransition } from 'react'

export default function Home() {

    const {t} = useTranslation();

  return (
    <>
    <Head>
        <title>Home</title>
    </Head>
    <main>
        {t('title')}
    </main>
    </>
  )
}
