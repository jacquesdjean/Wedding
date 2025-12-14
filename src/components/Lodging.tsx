import styled from 'styled-components';
import { Section } from './Section';
import { LodgingCard } from './LodgingCard';
import { weddingConfig } from '../config/weddingConfig';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 3rem;
  }
`;

const PrimaryCard = styled.div`
  max-width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    max-width: 600px;
  }
`;

const AlternativesSection = styled.div`
  margin-top: 2rem;
`;

const AlternativesTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.navy};
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.25rem;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const AlternativesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ${({ theme }) => theme.media.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const AlternativeItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sand};

  &:last-child {
    border-bottom: none;
  }

  ${({ theme }) => theme.media.tablet} {
    padding: 1rem;
    border-bottom: none;
    background-color: ${({ theme }) => theme.colors.cream};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    text-align: center;
  }
`;

const AlternativeName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.charcoal};
`;

const AlternativeType = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-left: 0.5rem;

  ${({ theme }) => theme.media.tablet} {
    display: block;
    margin-left: 0;
    margin-top: 0.25rem;
  }
`;

const AllLodgingLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.navy};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  -webkit-tap-highlight-color: transparent;
  min-height: ${({ theme }) => theme.touch.minTarget};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    opacity: 0.8;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const Lodging: React.FC = () => {
  const { primary, alternatives, allLodgingLink } = weddingConfig.lodging;

  return (
    <Section id="lodging" background="white">
      <SectionTitle>Where to Stay</SectionTitle>
      <PrimaryCard>
        <LodgingCard
          name={primary.name}
          isPrimary={primary.isPrimary}
          roomBlockNote={primary.roomBlockNote}
          phone={primary.phone}
          website={primary.website}
          walkable={primary.walkable}
        />
      </PrimaryCard>

      <AlternativesSection>
        <AlternativesTitle>Other Options</AlternativesTitle>
        <AlternativesList>
          {alternatives.map((alt, index) => (
            <AlternativeItem key={index}>
              <AlternativeName>{alt.name}</AlternativeName>
              <AlternativeType>{alt.type}</AlternativeType>
            </AlternativeItem>
          ))}
        </AlternativesList>
      </AlternativesSection>

      <AllLodgingLink href={allLodgingLink} target="_blank" rel="noopener noreferrer">
        See all lodging options →
      </AllLodgingLink>
    </Section>
  );
};
