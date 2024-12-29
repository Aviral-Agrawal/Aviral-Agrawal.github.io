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
              <Stepper style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ flex: '1' }}> {/* Text container */}
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
                </StepperHead>
                <StepperDesc dangerouslySetInnerHTML={{__html: item.description}} />
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
