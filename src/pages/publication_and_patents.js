import React from 'react'
import '../styles/stepper.css'
import work from '../data/Work'
import publ from '../data/Publications_new'
import patents from '../data/Patents'
import grad from '../data/Edu'
import lang from '../data/Language'
import hobby from '../data/Interests'
import { ExperienceWrapper, WorkWrapper, EdWrapper, EdContent, Stepper, StepperHead, LogoLink, StepperDesc } from '../styles/workStyle.js'
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
              <Stepper>
                <StepperHead>
                  <div>
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
              <Stepper>
                <StepperHead>
                  <div>
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
