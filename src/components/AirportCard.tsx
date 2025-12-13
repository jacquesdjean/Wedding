import styled from 'styled-components';

interface AirportCardProps {
  code: string;
  name: string;
  distance: string;
  driveTime: string;
  recommended?: boolean;
}

const Card = styled.div<{ $recommended: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  border: ${({ $recommended, theme }) =>
    $recommended ? `2px solid ${theme.colors.sage}` : `1px solid ${theme.colors.sand}`};
  position: relative;
`;

const RecommendedBadge = styled.span`
  position: absolute;
  top: -10px;
  right: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.sage};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const AirportCode = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const AirportName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.charcoal};
`;

const TravelInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const InfoItem = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const AirportCard: React.FC<AirportCardProps> = ({
  code,
  name,
  distance,
  driveTime,
  recommended = false,
}) => {
  return (
    <Card $recommended={recommended}>
      {recommended && <RecommendedBadge>Recommended</RecommendedBadge>}
      <AirportCode>{code}</AirportCode>
      <AirportName>{name}</AirportName>
      <TravelInfo>
        <InfoItem>{distance}</InfoItem>
        <InfoItem>•</InfoItem>
        <InfoItem>{driveTime}</InfoItem>
      </TravelInfo>
    </Card>
  );
};
