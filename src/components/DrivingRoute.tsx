import styled from 'styled-components';

interface DriveTime {
  from: string;
  time: string;
}

interface DrivingRouteProps {
  intro: string;
  stopover: {
    city: string;
    recommendation: string;
    description: string;
  };
  driveTimes: DriveTime[];
}

const RouteWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const RouteTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Intro = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StopoverSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StopoverTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StopoverRec = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StopoverDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.charcoal};
  margin: 0;
`;

const DriveTimesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const DriveTimeItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.cream};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const FromCity = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Time = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

export const DrivingRoute: React.FC<DrivingRouteProps> = ({
  intro,
  stopover,
  driveTimes,
}) => {
  return (
    <RouteWrapper>
      <RouteTitle>Driving from Texas</RouteTitle>
      <Intro>{intro}</Intro>
      <StopoverSection>
        <StopoverTitle>The New Orleans Route (Recommended)</StopoverTitle>
        <StopoverRec>{stopover.recommendation}</StopoverRec>
        <StopoverDesc>{stopover.description}</StopoverDesc>
      </StopoverSection>
      <DriveTimesGrid>
        {driveTimes.map((dt, index) => (
          <DriveTimeItem key={index}>
            <FromCity>From {dt.from}</FromCity>
            <Time>{dt.time}</Time>
          </DriveTimeItem>
        ))}
      </DriveTimesGrid>
    </RouteWrapper>
  );
};
