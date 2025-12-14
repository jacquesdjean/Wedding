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
  padding: 1.5rem;
  margin-top: 2rem;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`;

const RouteTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 1rem;
  font-size: 1.25rem;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

const Intro = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const StopoverSection = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.media.tablet} {
    padding: 1.5rem;
  }
`;

const StopoverTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.navy};
  margin-bottom: 0.5rem;
`;

const StopoverRec = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.navyDark};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 0.25rem;
`;

const StopoverDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.charcoal};
  margin: 0;
  line-height: 1.5;
`;

const DriveTimesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  ${({ theme }) => theme.media.tablet} {
    gap: 1rem;
  }
`;

const DriveTimeItem = styled.div`
  text-align: center;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.cream};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${({ theme }) => theme.media.tablet} {
    padding: 1rem;
  }
`;

const FromCity = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 0.25rem;

  ${({ theme }) => theme.media.tablet} {
    font-size: 0.875rem;
  }
`;

const Time = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.25rem;
  }
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
