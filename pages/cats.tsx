import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Blankor from '../Components/Blankor'
import Counter from '../Components/Counter'
import DefaultHead from '../Components/DefaultHead'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import cat1 from "../images/kari-shea-eMzblc6JmXM-unsplash.jpg"
import cat2 from "../images/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg"
import cat3 from "../images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg"
import home from "../images/home-solid.svg"

const Cats = () => {
  const [error, setError] = useState<string>("")
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  const fetchImage = useCallback(async() => {
    try {
      setError("")
      const result = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&order=RANDOM`, {
        method: "GET",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY
        }
      })
      setImgUrl((await result.json())[0].url)
    }
    catch(err) {
      console.error(err)
      setError(err.message)
    }
  }, [])

  return (
    <main>
      <DefaultHead/>
      <Head>
        <title>Next.js Test Site - Cats</title>
      </Head>

      <Header>
        <h2>Cats | <Link href="/"><Image className="interact" src={home} alt="Home" height={26}/></Link></h2>
      </Header>

      <section>
        <Counter/>

        <hr/>

        <p>This section tests Next.js' <Blankor href="https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/">Image</Blankor> component.</p>

        <br/>
        <div>
          <Image src={cat1} alt="chair cat"/>
          <div>
            Photo by <a href="https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kari Shea</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <Image src={cat2} alt="butterfly cat"/>
          <div>
            Photo by <a href="https://unsplash.com/@_k_arinn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karina Vorozheeva</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <Image src={cat3} alt="sleeping cat"/>
          <div>
            Photo by <a href="https://unsplash.com/@ludemeula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ludemeula Fernandes</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <hr/>

        <p>This section tests dynamically generated content from user interactions.</p>

        <div>
          <div><button onClick={fetchImage}>Get a Random Cat Image</button></div>
          {error && <div>{error}</div>}
          <br/>
          {imgUrl && <img src={imgUrl} alt="random cat" style={{width: "100%"}}/>}
          <div>
            Via <Blankor href="https://thecatapi.com/">Cat API</Blankor>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default Cats