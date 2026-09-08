import React from 'react';
import { experiences } from '../data/experiences';
import '../styles/index.css'
import { Typography } from 'antd';
const { Paragraph } = Typography;

const ExperienceList = () => {
    return (
        <div className="experience-list">
            {experiences.map((experience, idx) => {
                return <Paragraph>
                    {experience.dates} ⟡ {experience.role} ⟡ {experience.org}
                </Paragraph>
            })}
        </div>
    )
}

export default ExperienceList