import React from 'react'
//import MainBackground from '../assets/images/main_background.png'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Aviral <span>Agrawal</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my portfolio. I am a
        B.E. (Hons.) Computer Science graduate from BITS Pilani.
        I enjoy computer science as much as I love to read,
        converse, and watch movies.
        </p>
        <DownloadButton href="https://github.com/Aviral-Agrawal/aviral-agrawal.github.io/raw/Code/aviral_resume.pdf/"  download title="Resume">Download Resume</DownloadButton>
      </div>
      {/*<img src={MainBackground} alt="rashmi self" />*/}
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
