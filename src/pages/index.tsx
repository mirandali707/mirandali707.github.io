import React, { useState, Suspense, lazy } from 'react';
import { Layout, Row, Col, Typography, Divider, ConfigProvider, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
import { StaticImage } from "gatsby-plugin-image"
import '../styles/index.css'
import { mirandaConfig } from '../styles/mirandaConfig';
import { tagProperties } from '../data/tagProperties';
import Loading from '../components/Loading';

const TagFilterSelect = lazy(() => import('../components/TagFilterSelect'));
const FilterableAccomplishments = lazy(() => import('../components/FilterableAccomplishments'));
const PublicationsList = lazy(() => import('../components/PublicationsList'));
const ExperienceList = lazy(() => import('../components/ExperienceList'));
const ProjectsList = lazy(() => import('../components/ProjectsList'));
const AnyOrAllToggle = lazy(() => import('../components/AnyOrAllToggle'));

const Home = () => {
  const [activeTags, setActiveTags] = useState(Object.keys(tagProperties))
  const [anyOrAll, setAnyOrAll] = useState('any')

  return (
    <ConfigProvider
        theme={mirandaConfig}
      >
      <Layout className="layout" style={{backgroundColor:'#FFFCFA'}}>
      <Content style={{width:'75%', margin: 'auto', paddingTop: '2rem'}}>
        <Suspense fallback={<Loading />}>
          <IntroHeader />
          <Divider dashed />
          <Research />
          <Divider dashed />
          <Projects />
          <Divider dashed />
          <Experience 
            activeTags={activeTags}
            anyOrAll={anyOrAll}
            setActiveTags={setActiveTags}
            setAnyOrAll={setAnyOrAll}
          />
        </Suspense>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor:"#FFFCFA" }}>
        (☞ﾟヮﾟ)☞ &nbsp;
        <Link href='mailto:m1randa@mit.edu'>Email</Link>
        &nbsp;⟡&nbsp;
        <Link href='https://www.linkedin.com/in/miranda-li-b83859124/'>Linkedin</Link>
      </Footer>
    </Layout>
    </ConfigProvider>
    
  );
}

const IntroHeader = () => {
  return (
  <Row gutter={24} justify="space-around" align="middle">
      <Col span={16}>
          <Title>Miranda Li</Title>
          <Paragraph>
            I'm a second-year Master's student at the MIT Media Lab, in the <Link href='https://www.media.mit.edu/groups/personal-robots/overview/'>Personal Robots Group</Link>.
            I also work closely with <Link href='https://www.mit.edu/~abobu/'>Andreea Bobu</Link>, <Link href='https://arvindsatya.com/'>Arvind Satyanarayan</Link>,
            and <Link href='https://crystaljjlee.com/'>Crystal Lee</Link>.
            I study the design of intelligent, robotic tools that augment people in creative and otherwise open-ended tasks. I conduct ethnographic research with experienced artists to understand how they relate to and through their tools. Those qualitative findings inform my technical work: learning and evaluating aligned representations for human-machine co-adaptation, and designing and fabricating creative tools.
          </Paragraph>
          <Paragraph>
            Before MIT, I studied Computer Science (B.S. / M.S.) at Stanford University, where I was lucky to work with <Link href='https://stanford.edu/~cpiech/bio/index.html'>Chris Piech</Link> and teach CS through <Link href='https://cs198.stanford.edu/web'>CS198</Link> and <Link href='https://codeinplace.stanford.edu/'>Code in Place</Link>.
          </Paragraph>
          <Paragraph>
              Also, <Link href="/art">my art practice</Link> is very important to me.
          </Paragraph>
          <Paragraph>
          <Link href='https://www.linkedin.com/in/miranda-li-b83859124/'>Linkedin</Link>
          &nbsp;⟡&nbsp;
          <Link href='mailto:m1randa@mit.edu'>Email</Link>
          &nbsp;⟡&nbsp;
          <Link href='https://github.com/mirandali707'>Github</Link>
          </Paragraph>
      </Col>
      <Col span={8}>
          <StaticImage
              src="../images/miranda-headshot.jpg"
              alt="Headshot of Miranda Li."
              placeholder="blurred"
              layout="constrained"
              width={200}
              height={200}
              style={{borderRadius: '50%'}}
          />
      </Col>
  </Row>
  )
}

const Research = () => {
  return <>
    <Title id="research" level={3}>Research</Title>
    <Row>
      <PublicationsList/>
    </Row>
  </>
}

const Projects= () => {
  return <>
    <Title id="projects" level={3}>Projects</Title>
    <Row>
      <ProjectsList/>
    </Row>
  </>
}

const Experience = ({
  activeTags,
  anyOrAll,
  setActiveTags,
  setAnyOrAll
}) => {
  return <>
    <Title id="experience" level={3}>Experience</Title>
    {/* <Row gutter={8}>
      <Col flex="auto"><TagFilterSelect setActiveTags={setActiveTags}/></Col>
      <Col><AnyOrAllToggle anyOrAll={anyOrAll} setAnyOrAll={setAnyOrAll}/></Col>
    </Row>
    <Row><FilterableAccomplishments activeTags={activeTags} anyOrAll={anyOrAll}/></Row> */}
    <ExperienceList/>
  </>
}

export default Home 

export const Head = () => <title>Miranda Li</title>