import styled from 'styled-components';
import { Section } from './Section';
import { VenueCard } from './VenueCard';
import { weddingConfig } from '../config/weddingConfig';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const VenuesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
`;

const PhotoNote = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.mediumGray};
  font-style: italic;
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing['2xl']} auto 0;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.cream};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Venues: React.FC = () => {
  const { ceremony, reception, welcomeAndBrunch } = weddingConfig.venues;

  return (
    <Section id="venues" background="white">
      <SectionTitle>The Venues</SectionTitle>
      <VenuesGrid>
        <VenueCard
          name={ceremony.name}
          description={ceremony.description}
          address={ceremony.address}
          phone={ceremony.phone}
          website={ceremony.website}
          mapLink={ceremony.mapLink}
          image={ceremony.image}
          notes={ceremony.guestNotes}
        />
        <VenueCard
          name={reception.name}
          description={reception.description}
          image={reception.image}
          additionalNote={reception.note}
        />
        <VenueCard
          name={welcomeAndBrunch.name}
          description={welcomeAndBrunch.description}
          address={welcomeAndBrunch.address}
          phone={welcomeAndBrunch.phone}
          website={welcomeAndBrunch.website}
          mapLink={welcomeAndBrunch.mapLink}
          image={welcomeAndBrunch.image}
          roomBlockNote={welcomeAndBrunch.roomBlockNote}
        />
      </VenuesGrid>
      <PhotoNote>{weddingConfig.copy.photoNote}</PhotoNote>
    </Section>
  );
};
