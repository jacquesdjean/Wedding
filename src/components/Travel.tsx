import styled from 'styled-components';
import { Section } from './Section';
import { AirportCard } from './AirportCard';
import { DrivingRoute } from './DrivingRoute';
import { weddingConfig } from '../config/weddingConfig';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: 1rem;
  margin-top: 2rem;
  font-size: 1.25rem;

  &:first-of-type {
    margin-top: 0;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

const AirportsGrid = styled.div`
  /* Mobile-first: stacked */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.media.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
`;

const Note = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-style: italic;
  text-align: center;
`;

const ShuttleSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }
`;

const ShuttleTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: 1rem;
  font-size: 1.25rem;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

const ShuttleInfo = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: 1rem;
`;

const ShuttleSchedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const ScheduleItem = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const ShuttleNote = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.sage};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Travel: React.FC = () => {
  const { airports, shuttles, drivingFromTexas } = weddingConfig.travel;

  return (
    <Section id="travel" background="cream">
      <SectionTitle>Travel</SectionTitle>

      <Subtitle>Getting There by Air</Subtitle>
      <AirportsGrid>
        {airports.map((airport) => (
          <AirportCard
            key={airport.code}
            code={airport.code}
            name={airport.name}
            distance={airport.distance}
            driveTime={airport.driveTime}
            recommended={airport.recommended}
          />
        ))}
      </AirportsGrid>
      <Note>Rental cars available at all airports. We recommend flying into Tallahassee or Panama City.</Note>

      <ShuttleSection>
        <ShuttleTitle>Shuttle Service</ShuttleTitle>
        <ShuttleInfo>We're arranging shuttles from the airport for guests without cars.</ShuttleInfo>
        <ShuttleSchedule>
          <ScheduleItem>Friday: {shuttles.schedule.friday} shuttles</ScheduleItem>
          <ScheduleItem>Saturday: {shuttles.schedule.saturday} shuttle</ScheduleItem>
          <ScheduleItem>Sunday: {shuttles.schedule.sunday} shuttle</ScheduleItem>
        </ShuttleSchedule>
        <ShuttleNote>{shuttles.note}</ShuttleNote>
      </ShuttleSection>

      <DrivingRoute
        intro={drivingFromTexas.intro}
        stopover={drivingFromTexas.stopover}
        driveTimes={drivingFromTexas.driveTimes}
      />
    </Section>
  );
};
