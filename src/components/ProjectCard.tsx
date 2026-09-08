import React from 'react';
import { ProjectType } from "../data/projects";
import { Typography } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import HorizontalCard from './HorizontalCard';

const { Text, Paragraph } = Typography;

const ProjectCard = ({ key, project}: { key: any, project: ProjectType}) => {
    return (
        <HorizontalCard key={key} image={project.image}>
            <Text strong>{project.title}
                {project.url && <a href={project.url} target="_blank" rel="noreferrer noopener">
                    <LinkOutlined style={{marginLeft: '0.5rem'}}/>
                </a>}
            </Text>
            <Paragraph style={{ marginBottom: 0 }}>
                {project.description}
                {project.award && <>
                    <br/>
                    <Text type="success">⟡ {project.award}</Text>
                </>}
            </Paragraph>
        </HorizontalCard>
    )
}

export default ProjectCard;
