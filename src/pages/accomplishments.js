import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../styles/tabs.css'
import publications from '../data/Publications'
import awards from '../data/Awards_scholarships'
import ProjectBox from '../components/Projects/AccomplishmentsBox'
import { ProjectsWrapper, ProjectsSection } from '../styles/projectsStyle.js'
import Layout from '../components/layout'

const Projects = () => (
  <Layout>
  <ProjectsWrapper>
    <Tabs>
      <TabList>
        <Tab>Publications</Tab>
        {/*<Tab>Personal</Tab>*/}
        <Tab>Awards & Scholarships</Tab>
      </TabList>

      <TabPanel>
        <ProjectsSection>
          {
            publications.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>
      {/*<TabPanel>
        <ProjectsSection>
          {
            hobbyProjects.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>*/}
      <TabPanel>
        <ProjectsSection>
          {
            awards.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>
    </Tabs>
  </ProjectsWrapper>
  </Layout>
)

export default Projects
