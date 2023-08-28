import React from 'react'
import '../styles/stepper.css'
import teach from '../data/Teaching'
import grad from '../data/Edu'
import lang from '../data/Language'
import hobby from '../data/Interests'
import { ExperienceWrapper, WorkWrapper, EdWrapper, EdContent, Stepper, StepperHead, LogoLink, StepperDesc } from '../styles/workStyle.js'
import Layout from '../components/layout'

const Experience = () => (
  <Layout>
  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Teaching</h1>
      <div className="experience-stepper">
          {
            teach.map(item => (<div key={item.id} className="step">
              <div>
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <Stepper>
                <StepperHead>
                  <div>
                    <h3>{item.designation}</h3>
                    <a href={item.companyLink}>{item.name}</a>
                    <p>{item.dated}</p>
                  </div>
                  <LogoLink href={item.companyLink}>
                    <img src={item.logo} alt="company" width="175px"/>
                  </LogoLink>
                </StepperHead>
                <StepperDesc dangerouslySetInnerHTML={{__html: item.description}} />
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
