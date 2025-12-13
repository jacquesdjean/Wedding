import styled from 'styled-components';
import { Section } from './Section';
import { weddingConfig } from '../config/weddingConfig';

const WelcomeContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const WelcomeText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.mediumGray};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryImage = styled.div`
  aspect-ratio: 4 / 3;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.sand} 0%,
    ${({ theme }) => theme.colors.warmSand} 100%
  );
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  letter-spacing: 0.1em;
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: scale(1.02);
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
