import styled from 'styled-components';
import { Section } from './Section';
import { LodgingCard } from './LodgingCard';
import { weddingConfig } from '../config/weddingConfig';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const LodgingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PrimaryCard = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1 / -1;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
`;

const AlternativesSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const AlternativesTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const AlternativesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AllLodgingLink = styled.a`
  display: block;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.sage};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Lodging: React.FC = () => {
  const { primary, alternatives, allLodgingLink } = weddingConfig.lodging;

  return (
    <Section id="lodging" background="white">
      <SectionTitle>Where to Stay</SectionTitle>
      <LodgingGrid>
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
      </LodgingGrid>

      <AlternativesSection>
        <AlternativesTitle>Other Options</AlternativesTitle>
        <AlternativesGrid>
          {alternatives.map((alt, index) => (
            <LodgingCard key={index} name={alt.name} type={alt.type} />
          ))}
        </AlternativesGrid>
      </AlternativesSection>

      <AllLodgingLink href={allLodgingLink} target="_blank" rel="noopener noreferrer">
        See all lodging options →
      </AllLodgingLink>
    </Section>
  );
};
