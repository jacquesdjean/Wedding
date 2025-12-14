import styled from 'styled-components';

interface LodgingCardProps {
  name: string;
  type?: string;
  isPrimary?: boolean;
  roomBlock?: boolean;
  roomBlockNote?: string;
  phone?: string;
  website?: string;
  walkable?: boolean;
}

const Card = styled.div<{ $isPrimary: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1.5rem;
  border: ${({ $isPrimary, theme }) =>
    $isPrimary ? `2px solid ${theme.colors.yellow}` : `1px solid ${theme.colors.sand}`};
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`;

const PrimaryBadge = styled.span`
  position: absolute;
  top: -12px;
  left: 1.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.navyDark};
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const LodgingName = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 0.5rem;
  font-size: 1.25rem;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

const LodgingType = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
  display: block;
  margin-bottom: 1rem;
`;

const RoomBlockNote = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.navyDark};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.yellowLight};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 1rem;
`;

const PhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  min-height: ${({ theme }) => theme.touch.minButton};
  -webkit-tap-highlight-color: transparent;
  margin-top: 0.5rem;

  &:active {
    opacity: 0.8;
    transform: scale(0.98);
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.navyDark};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.charcoal};
  margin: 0;

  a {
    color: ${({ theme }) => theme.colors.navy};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    &:active {
      opacity: 0.8;
    }

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }
`;

const WalkableBadge = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.navyDark};
  background-color: ${({ theme }) => theme.colors.yellowLight};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: 1rem;
`;

export const LodgingCard: React.FC<LodgingCardProps> = ({
  name,
  type,
  isPrimary = false,
  roomBlockNote,
  phone,
  website,
  walkable = false,
}) => {
  return (
    <Card $isPrimary={isPrimary}>
      {isPrimary && <PrimaryBadge>Primary</PrimaryBadge>}
      <LodgingName>{name}</LodgingName>
      {type && <LodgingType>{type}</LodgingType>}
      {roomBlockNote && <RoomBlockNote>{roomBlockNote}</RoomBlockNote>}
      {phone && (
        <PhoneLink href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>
          Call {phone}
        </PhoneLink>
      )}
      {website && (
        <ContactInfo>
          <ContactItem>
            <a href={website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </ContactItem>
        </ContactInfo>
      )}
      {walkable && <WalkableBadge>Walking distance to venues</WalkableBadge>}
    </Card>
  );
};
