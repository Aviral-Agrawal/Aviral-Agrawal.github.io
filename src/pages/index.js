import React from 'react'
//import MainBackground from '../assets/images/main_background.png'
import AboutBox2 from '../components/About/AboutBox2'
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
        Hello there! I am currently pursuing a Master of Science in Computer Vision from Carnegie Mellon University. 
        Prior to my current role as a student, I've worked in the industry for a total of three years building experience
        in video compression, video understanding, and video quality enhancement. I believe that Computer Vision has much more 
        to offer and hence, I am looking forward to broadening my experience horizon with other applications too!
        </p>
        <DownloadButton href="https://github.com/Aviral-Agrawal/aviral-agrawal.github.io/raw/Code/aviral_resume.pdf/"  download title="Aviral_Agrawal_Resume">Download Resume</DownloadButton>
      </div>
      {}
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox2 key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
