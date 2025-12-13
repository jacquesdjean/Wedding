import styled from 'styled-components';
import { weddingConfig } from '../config/weddingConfig';

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.warmSand},
    ${({ theme }) => theme.colors.sand}
  );
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.overlay};
  }
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const CoupleName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes['6xl']};
  }
`;

const DateLocation = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.95;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: 0.8;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const ScrollText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const ScrollArrow = styled.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  transform: rotate(45deg);
  opacity: 0.8;
`;

export const Hero: React.FC = () => {
  return (
    <HeroWrapper id="home">
      <HeroBackground>
        <ImagePlaceholder>[{weddingConfig.images.hero}]</ImagePlaceholder>
      </HeroBackground>
      <HeroContent>
        <CoupleName>{weddingConfig.couple.name}</CoupleName>
        <DateLocation>
          {weddingConfig.date.short} · {weddingConfig.location.city}, {weddingConfig.location.state}
        </DateLocation>
      </HeroContent>
      <ScrollIndicator>
        <ScrollText>Scroll</ScrollText>
        <ScrollArrow />
      </ScrollIndicator>
    </HeroWrapper>
  );
};
