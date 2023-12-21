import React from 'react'
import '../styles/stepper.css'
import grad from '../data/Edu'

import { ExperienceWrapper, WorkWrapper, Stepper, StepperHead, LogoLink, StepperDesc } from '../styles/workStyle.js'
import Layout from '../components/layout'

const Experience = () => (
  <Layout>
  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Education</h1>
      <div className="experience-stepper">
          {
            grad.map(item => (<div key={item.id} className="step">
              <div>
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <Stepper>
                <StepperHead>
                  <div>
                    <h3>{item.name}</h3>
                    <a href={item.companyLink}>{item.degree}</a>
                    <p>{item.dated}</p>
                    <p>CGPA: {item.cgpa}
                    <br/>
                    {item.division}
                    <br/>
                    Coursework: {item.coursework}
                    </p>
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
