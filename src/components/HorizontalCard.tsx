import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

// How tall the image is allowed to get. The image keeps its natural aspect
// ratio, so this also caps how wide it ends up being.
export const MAX_IMAGE_HEIGHT = 180;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

// The image is shown whole — no cropping, no stretching. Capping the Gatsby
// sizer's height (with width: auto) scales the whole wrapper down at its
// original aspect ratio, so the card ends up as tall as the image, or as tall
// as the body content, whichever is taller.
const ImagePane = styled.div<{ $maxImageHeight: number }>`
  flex: 0 0 auto;
  align-self: flex-start;

  .gatsby-image-wrapper {
    max-height: ${props => props.$maxImageHeight}px;
  }

  .gatsby-image-wrapper > div:first-child {
    max-height: ${props => props.$maxImageHeight}px;
  }

  .gatsby-image-wrapper > div:first-child img {
    max-height: ${props => props.$maxImageHeight}px;
    width: auto;
  }

  /* A plain <img> (e.g. a GIF) is capped directly, since it has no Gatsby
     wrapper to size for it. */
  > img {
    display: block;
    max-height: ${props => props.$maxImageHeight}px;
    max-width: 100%;
    width: auto;
    height: auto;
  }

  img {
    object-fit: contain; /* Show the whole image rather than filling the box */
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  padding: 24px;
  flex: 1;
  min-width: 0;
`;

const HorizontalCard = ({ image, children, maxImageHeight = MAX_IMAGE_HEIGHT }: {
  image?: React.ReactNode,
  children: React.ReactNode,
  maxImageHeight?: number,
}) => (
  <Card hoverable style={{ width: '100%', overflow: 'hidden' }} bodyStyle={{ padding: 0 }}>
    <Row>
      {/* Horizontal Image */}
      {image && <ImagePane $maxImageHeight={maxImageHeight}>{image}</ImagePane>}
      {/* Card Body Content */}
      <Body>{children}</Body>
    </Row>
  </Card>
);

export default HorizontalCard;
