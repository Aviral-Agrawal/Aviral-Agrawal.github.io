import React from 'react'
import MainBackground from '../assets/images/main_background.png'
import ProfileImage from '../assets/images/aviral_image.jpg'
import AboutBox2 from '../components/About/AboutBox2'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <UserWrapper style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <UserTitle>
            Aviral <span>Agrawal</span>
          </UserTitle>
          <UserDescription>
            <div>
              <p>
                Hello there! I am a M.S. in Computer Vision graduate from Carnegie Mellon
                University and will begin working as a Computer Vision Software Engineer at Waymo! Prior to this, I've worked in the industry for a total of three
                years in companies such as Nvidia, Samsung Research, Amazon, Oracle building experience in industry research in domain such as video understanding, video quality enhancement, and video compression.
                I believe that Computer Vision has much to offer and hence, I am looking forward to broadening
                my experience horizon with other applications too!
              </p>
              <DownloadButton
                href="https://github.com/Aviral-Agrawal/aviral-agrawal.github.io/raw/Code/aviral_resume.pdf/"
                download
                title="Aviral_Agrawal_Resume"
              >
                Download Resume
              </DownloadButton>
            </div>
          </UserDescription>
          <UserTopic>
            {about.map((item) => (
              <AboutBox2 key={item.id} info={item} />
            ))}
          </UserTopic>
        </div>
        <img
          src={ProfileImage}
          alt="Profile"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginLeft: '20px',
          }}
        />
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
