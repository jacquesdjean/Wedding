import styled from 'styled-components';
import { Section } from './Section';
import { VenueCard } from './VenueCard';
import { weddingConfig } from '../config/weddingConfig';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.media.tablet} {
    margin-bottom: 3rem;
  }
`;

const VenuesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${({ theme }) => theme.media.tablet} {
    gap: 2rem;
  }
`;

const PhotoNote = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
  font-style: italic;
  max-width: 100%;
  margin: 2rem auto 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.cream};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${({ theme }) => theme.media.tablet} {
    max-width: 600px;
    font-size: 1rem;
    padding: 1.5rem;
  }
`;

export const Venues: React.FC = () => {
  const { ceremony, reception, hub } = weddingConfig.venues;

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
          name={hub.name}
          role={hub.role}
          description={hub.description}
          address={hub.address}
          phone={hub.phone}
          website={hub.website}
          mapLink={hub.mapLink}
          image={hub.image}
          roomBlockNote={hub.roomBlockNote}
        />
      </VenuesGrid>
      <PhotoNote>{weddingConfig.copy.photoNote}</PhotoNote>
    </Section>
  );
};
