import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Layout, Typography, Divider, ConfigProvider, Breadcrumb } from 'antd';
import '../styles/index.css';
import { mirandaConfig } from '../styles/mirandaConfig';

const { Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

// How plain markdown maps onto my antd components, so .mdx files
// automatically pick up the same styling as the rest of the site.
const components = {
    h1: (props) => <Title level={1} {...props} />,
    h2: (props) => <Title level={2} {...props} />,
    h3: (props) => <Title level={3} {...props} />,
    h4: (props) => <Title level={4} {...props} />,
    h5: (props) => <Title level={5} {...props} />,
    p: (props) => <Paragraph {...props} />,
    a: (props) => <Link {...props} />,
    strong: (props) => <Text strong {...props} />,
    em: (props) => <Text italic {...props} />,
    code: (props) => <Text code {...props} />,
    hr: () => <Divider dashed />,
    img: (props) => <img style={{ maxWidth: '100%' }} {...props} />,
    blockquote: (props) => (
        <blockquote
            style={{
                borderLeft: `3px solid ${mirandaConfig.token.colorPrimary}`,
                margin: '1rem 0',
                padding: '0.25rem 0 0.25rem 1rem',
            }}
            {...props}
        />
    ),
};

// Rendered by gatsby-node.js for every .mdx file with a `slug` in its
// frontmatter. `children` is the compiled body of that .mdx file.
const MdxPage = ({ data, children }) => {
    const { title, breadcrumb } = data.mdx.frontmatter;

    return (
        <ConfigProvider theme={mirandaConfig}>
            <Layout className="layout" style={{ backgroundColor: '#FFFCFA' }}>
                <Content style={{ width: '75%', margin: 'auto', paddingTop: '2rem' }}>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link href="/">Miranda ₊ ⊹ ⟡</Link>,
                            },
                            {
                                title: breadcrumb || title,
                            },
                        ]}
                    />
                    {title && <Title>{title}</Title>}
                    <MDXProvider components={components}>{children}</MDXProvider>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: '#FFFCFA' }}>
                    I made this website myself using Gatsby, React, Ant Design, and TypeScript.
                    Anyways, if you've come all this way, you may as well say hello... (☞ﾟヮﾟ)☞ &nbsp;
                    <Link href="https://www.linkedin.com/in/miranda-li-b83859124/">Linkedin</Link>
                    &nbsp;⟡&nbsp;
                    <Link href="mailto:mirandal@stanford.edu">Email</Link>
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};

export const query = graphql`
    query MdxPageById($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                slug
                breadcrumb
            }
        }
    }
`;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title || 'Miranda Li'}</title>;

export default MdxPage;
