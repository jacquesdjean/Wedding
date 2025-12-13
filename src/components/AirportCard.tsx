import styled from 'styled-components';

interface AirportCardProps {
  code: string;
  name: string;
  distance: string;
  driveTime: string;
  recommended?: boolean;
}

const Card = styled.div<{ $recommended: boolean }>`
  /* Mobile-first: horizontal layout */
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  border: ${({ $recommended, theme }) =>
    $recommended ? `2px solid ${theme.colors.sage}` : `1px solid ${theme.colors.sand}`};
  position: relative;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
  }
`;

const RecommendedBadge = styled.span`
  position: absolute;
  top: -10px;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.sage};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const AirportCode = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.sage};
  min-width: 60px;

  ${({ theme }) => theme.media.tablet} {
    font-size: 2rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AirportName = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.charcoal};
`;

const TravelInfo = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-top: 0.25rem;
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
      <Details>
        <AirportName>{name}</AirportName>
        <TravelInfo>{distance} · {driveTime}</TravelInfo>
      </Details>
    </Card>
  );
};
