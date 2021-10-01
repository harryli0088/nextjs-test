import React from "react"
import Head from 'next/head'

const DefaultHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Next.js Test Site</title>
      <link rel="canonical" href="https://harryli0088.github.io/nextjs-test/" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      <meta name="description" content="A website I made to test Next.js"/>
      <meta name="keywords" content="next.js,next,react,typescript"/>

      <meta property="og:image" content="https://harryli0088.github.io/nextjs-test/screenshot.png"/>
      <meta property="og:site_name" content="nextjs-test"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Next.js Test Site"/>
      <meta property="og:url" content="https://harryli0088.github.io/nextjs-test/"/>
      <meta property="og:description" content="A website I made to test Next.js"/>
    </Head>
  )
}

export default DefaultHead