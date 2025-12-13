import styled from 'styled-components';

interface VenueCardProps {
  name: string;
  description: string;
  address?: string;
  phone?: string;
  website?: string;
  mapLink?: string;
  image: string;
  notes?: string[];
  roomBlockNote?: string;
  additionalNote?: string;
}

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 4 / 3;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.sand} 0%,
    ${({ theme }) => theme.colors.warmSand} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  letter-spacing: 0.1em;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: auto;
    min-height: 300px;
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VenueName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const DetailItem = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.charcoal};
  margin: 0;

  a {
    color: ${({ theme }) => theme.colors.sage};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const NotesList = styled.ul`
  background-color: ${({ theme }) => theme.colors.lightSage};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const NoteItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.charcoal};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.sage};
  }
`;

const RoomBlockNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.lightGold};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const AdditionalNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  font-style: italic;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const VenueCard: React.FC<VenueCardProps> = ({
  name,
  description,
  address,
  phone,
  website,
  mapLink,
  image,
  notes,
  roomBlockNote,
  additionalNote,
}) => {
  return (
    <Card>
      <ImageContainer>[{image}]</ImageContainer>
      <Content>
        <VenueName>{name}</VenueName>
        <Description>{description}</Description>
        {(address || phone || website) && (
          <Details>
            {address && (
              <DetailItem>
                {mapLink ? (
                  <a href={mapLink} target="_blank" rel="noopener noreferrer">
                    {address}
                  </a>
                ) : (
                  address
                )}
              </DetailItem>
            )}
            {phone && <DetailItem>{phone}</DetailItem>}
            {website && (
              <DetailItem>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website.replace('https://www.', '')}
                </a>
              </DetailItem>
            )}
          </Details>
        )}
        {notes && notes.length > 0 && (
          <NotesList>
            {notes.map((note, index) => (
              <NoteItem key={index}>{note}</NoteItem>
            ))}
          </NotesList>
        )}
        {roomBlockNote && <RoomBlockNote>{roomBlockNote}</RoomBlockNote>}
        {additionalNote && <AdditionalNote>{additionalNote}</AdditionalNote>}
      </Content>
    </Card>
  );
};
