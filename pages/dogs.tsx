import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Blankor from '../Components/Blankor'
import Counter from '../Components/Counter'
import DefaultHead from '../Components/DefaultHead'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import dog1 from "../public/images/lui-peng-ybHtKz5He9Y-unsplash.jpg"
import dog2 from "../public/images/jamie-street-UtrE5DcgEyg-unsplash.jpg"
import dog3 from "../public/images/david-moynihan-BT_QM4CpnNE-unsplash.jpg"
import home from "../public/images/home-solid.svg"

const Dogs = () => {
  const [error, setError] = useState<string>("")
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  const fetchImage = useCallback(async() => {
    try {
      setError("")
      const result = await fetch("https://dog.ceo/api/breeds/image/random")
      setImgUrl((await result.json()).message)
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
        <title>Next.js Test Site - Dogs</title>
      </Head>

      <Header>
        <h2>Dogs | <Link href="/"><Image className="interact" src={home} alt="Home" height={26}/></Link></h2>
      </Header>

      <section>
        <Counter/>

        <hr/>

        <p>This section tests Next.js' <Blankor href="https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/">Image</Blankor> component.</p>

        <br/>
        <div>
          <Image src={dog1} alt="beautiful dog"/>
          <div>
            Photo by <Blankor href="https://unsplash.com/@luipeng?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lui Peng</Blankor> on <Blankor href="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Blankor>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <Image src={dog2} alt="cute dog"/>
          <div>
            Photo by <Blankor href="https://unsplash.com/@jamie452?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Street</Blankor> on <Blankor href="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Blankor>
          </div>
        </div>

        <br/>
        <br/>
        
        <div>
          <Image src={dog3} alt="golden"/>
          <div>
            Photo by <Blankor href="https://unsplash.com/@slowbiker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Moynihan</Blankor> on <Blankor href="https://unsplash.com/s/photos/golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</Blankor>
          </div>
        </div>

        <br/>

        <hr/>

        <p>This section tests dynamically generated content from user interactions.</p>
    
        <div>
          <div><button onClick={fetchImage}>Get a Random Dog Image</button></div>
          {error && <div>{error}</div>}
          <br/>
          {imgUrl && <img src={imgUrl} alt="random dog" style={{width: "100%"}}/>}
          <div>
            Via <Blankor href="https://dog.ceo/">Dog API</Blankor>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default Dogs