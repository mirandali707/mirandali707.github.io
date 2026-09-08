import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

// The image pane stretches to the card's height and never drives it, so the
// image is capped at whatever height the body content gives the card.
const ImagePane = styled.div`
  flex: 0 0 200px;
  align-self: stretch;
  position: relative;
  overflow: hidden;

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper > div:first-child {
    padding-top: 0 !important;
    height: 100%;
  }

  img {
    object-fit: cover; /* Ensures the image crops cleanly */
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px;
  flex: 1;
  min-width: 0;
`;

const HorizontalCard = ({ image, children }: { image?: React.ReactNode, children: React.ReactNode }) => (
  <Card hoverable style={{ width: '100%', overflow: 'hidden' }} bodyStyle={{ padding: 0 }}>
    <Row>
      {/* Horizontal Image */}
      {image && <ImagePane>{image}</ImagePane>}
      {/* Card Body Content */}
      <Body>{children}</Body>
    </Row>
  </Card>
);

export default HorizontalCard;
