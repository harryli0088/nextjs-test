
import Image from 'next/image'
import Link from 'next/link'

import Blankor from "../Components/Blankor"
import Counter from "../Components/Counter"
import DefaultHead from '../Components/DefaultHead'
import Footer from "../Components/Footer"
import Header from "../Components/Header"

import cat from "../images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg"
import dog from "../images/david-moynihan-BT_QM4CpnNE-unsplash.jpg"
import github from "../images/github-brands.svg"

const IndexPage = () => {
  return (
    <main>
      <DefaultHead/>
      
      <Header>
        <h1>Next.js Test Site <span role="img" aria-label="Party popper emoji">🎉</span></h1>

        <Blankor href="https://github.com/harryli0088/nextjs-test"><Image className="interact" src={github} alt="GitHub logo" height={30}/></Blankor>
      </Header>

      <section>
        <Counter/>

        <hr/>
        
        <div>
          <Link href="/cats"><h3>Cats</h3></Link>
          <Link href="/cats">
            <Image src={cat} alt="sleeping cat"/>
          </Link>
          <div>
            Photo by <a href="https://unsplash.com/@ludemeula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ludemeula Fernandes</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <br/>
        <br/>

        <div>
          <Link href="/dogs"><h3>Dogs</h3></Link>
          <Link href="/dogs">
            <Image src={dog} alt="golden"/>
          </Link>
          <div>
            Photo by <a href="https://unsplash.com/@slowbiker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Moynihan</a> on <a href="https://unsplash.com/s/photos/golden-retriever?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>

        <hr/>

        <div>
          <p>Useful Documentation:</p>

          <ul>
            <li><Blankor href="https://nextjs.org/learn/basics/create-nextjs-app">Getting Started</Blankor></li>
            <li><Blankor href="https://nextjs.org/learn/excel/typescript">TypeScript</Blankor></li>
            <li><Blankor href="https://nextjs.org/docs/basic-features/built-in-css-support">Global CSS</Blankor></li>
            <li><Blankor href="https://nextjs.org/docs/api-reference/next/image">Images</Blankor></li>
            <li><Blankor href="https://nextjs.org/docs/basic-features/environment-variables">Environment Variables</Blankor></li>
          </ul>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default IndexPage
