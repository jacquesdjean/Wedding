import styled from 'styled-components';
import { Section } from './Section';
import { weddingConfig } from '../config/weddingConfig';

const WelcomeContent = styled.div`
  text-align: center;
  /* Mobile-first: full width */
  max-width: 100%;
  margin: 0 auto 2rem;

  ${({ theme }) => theme.media.tablet} {
    max-width: 700px;
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 1.5rem;
  }
`;

const WelcomeText = styled.p`
  /* Mobile-first: base size */
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.muted};

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.125rem;
  }
`;

const Gallery = styled.div`
  /* Mobile-first: single column */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.media.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const GalleryImage = styled.div`
  aspect-ratio: 16 / 9;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.sand} 0%,
    ${({ theme }) => theme.colors.cream} 100%
  );
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.muted};
  letter-spacing: 0.1em;
  overflow: hidden;

  ${({ theme }) => theme.media.tablet} {
    aspect-ratio: 4 / 3;
  }
`;

export const Welcome: React.FC = () => {
  return (
    <Section id="welcome" background="white">
      <WelcomeContent>
        <SectionTitle>Welcome to Apalachicola</SectionTitle>
        <WelcomeText>{weddingConfig.copy.welcome}</WelcomeText>
      </WelcomeContent>
      <Gallery>
        {weddingConfig.images.town.map((image, index) => (
          <GalleryImage key={index}>[{image}]</GalleryImage>
        ))}
      </Gallery>
    </Section>
  );
};
