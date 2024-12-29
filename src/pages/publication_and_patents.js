import React from 'react'
import '../styles/stepper.css'
import publ from '../data/Publications_new'
import patents from '../data/Patents'
import { ExperienceWrapper, WorkWrapper, Stepper, StepperHead, LogoLink, StepperDesc } from '../styles/workStyle.js'
import Layout from '../components/layout'

const Experience = () => (
  <Layout>
  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Publications</h1>
      <div className="experience-stepper">
          {
            publ.map(item => (<div key={item.id} className="step">
              <div>
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <Stepper style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ flex: '1' }}> {/* Text container */}
                <StepperHead>
                  <div>
                    <a>{item.name}</a>
                    <p style={{ marginBottom: '5px' }}>{item.dated}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '0px' }}>
                      <p href={item.arxivlink} style={{ textDecoration: 'none', color: '#6c8cd5', margin: '0' }}>Arxiv</p>
                      <p href={item.websitelink} style={{ textDecoration: 'none', color: '#6c8cd5', margin: '0' }}>Website</p>
                    </div>
                  </div>
                </StepperHead>
                <StepperDesc style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
              <LogoLink href={item.companyLink} style={{ width: '300px', flexShrink: '0', marginLeft: '20px' }}>
                {item.video ? (
                  // If a video exists, render the video
                  <video 
                    width="300" 
                    height="auto" 
                    style={{ objectFit: 'contain', borderRadius: '5px' }} 
                    controls 
                    loop 
                    muted 
                    autoPlay
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Otherwise, render the image
                  <img 
                    src={item.logo} 
                    alt="company" 
                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '5px' }} 
                  />
                )}
              </LogoLink>
            </Stepper>


              </div>
            ))
          }
    </div>
    </WorkWrapper>

  </ExperienceWrapper>


  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Patents</h1>
      <div className="experience-stepper">
          {
            patents.map(item => (<div key={item.id} className="step">
              <div>
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <Stepper style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ flex: '1' }}> {/* Text container */}
                <StepperHead>
                  <div>
                    <a>{item.name}</a>
                    <p style={{ marginBottom: '5px' }}>{item.dated}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '0px' }}>
                      <p href={item.statuslink} style={{ textDecoration: 'none', color: '#6c8cd5', margin: '0' }}>Status</p>
                    </div>
                  </div>
                </StepperHead>
                <StepperDesc style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
              <LogoLink href={item.companyLink} style={{ width: '175px', height: 'auto', flexShrink: '0', marginLeft: '20px' }}>
                <img src={item.logo} alt="company" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </LogoLink>
            </Stepper>
              </div>
            ))
          }
    </div>
    </WorkWrapper>

  </ExperienceWrapper>
  </Layout>
)

export default Experience
