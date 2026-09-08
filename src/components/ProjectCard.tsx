import React from 'react';
import { ProjectType } from "../data/projects";
import { Typography } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import HorizontalCard from './HorizontalCard';

const { Text, Paragraph } = Typography;

const ProjectCard = ({ key, project}: { key: any, project: ProjectType}) => {
    return (
        <HorizontalCard key={key} image={project.image}>
            <Text strong>{project.title}</Text>
            <Paragraph style={{ marginBottom: 0 }}>
                {project.description}
                {project.award && <>
                    <br/>
                    <Text type="success">⟡ {project.award}</Text>
                </>}
            </Paragraph>
            {project.links && <Paragraph style={{ marginBottom: 0 }}>
                {project.links.map((link, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && " ⟡ "}
                        <a href={link.url} target="_blank" rel="noreferrer noopener">{link.text}</a>
                    </React.Fragment>
                ))}
            </Paragraph>}
        </HorizontalCard>
    )
}

export default ProjectCard;
