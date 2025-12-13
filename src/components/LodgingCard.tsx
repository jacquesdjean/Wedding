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
  padding: ${({ theme }) => theme.spacing.xl};
  border: ${({ $isPrimary, theme }) =>
    $isPrimary ? `2px solid ${theme.colors.gold}` : `1px solid ${theme.colors.sand}`};
  position: relative;
`;

const PrimaryBadge = styled.span`
  position: absolute;
  top: -12px;
  left: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const LodgingName = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const LodgingType = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RoomBlockNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.lightGold};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ContactItem = styled.p`
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

const WalkableBadge = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.sage};
  background-color: ${({ theme }) => theme.colors.lightSage};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
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
      {(phone || website) && (
        <ContactInfo>
          {phone && <ContactItem>Call: {phone}</ContactItem>}
          {website && (
            <ContactItem>
              <a href={website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </ContactItem>
          )}
        </ContactInfo>
      )}
      {walkable && <WalkableBadge>Walking distance to venues</WalkableBadge>}
    </Card>
  );
};
