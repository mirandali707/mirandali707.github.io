import React from 'react';
import { ProjectType } from "../data/projects";
import { Card, Typography } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const ProjectCard = ({ key, project}: { key: any, project: ProjectType}) => {
    return (
        <Card key={key} style={{ width: '100%' }}>
            <Text strong>{project.title}
                {project.url && <a href={project.url} target="_blank" rel="noreferrer noopener">
                    <FileTextOutlined style={{marginLeft: '0.5rem'}}/>
                </a>}
            </Text>
            <Paragraph>
                {project.award && <>
                    <br/>
                    <Text type="success">⟡ {project.award}</Text>
                </>}
            </Paragraph>
        </Card>
    )
}

export default ProjectCard;