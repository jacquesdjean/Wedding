import styled from 'styled-components';
import { Section } from './Section';
import { AirportCard } from './AirportCard';
import { DrivingRoute } from './DrivingRoute';
import { weddingConfig } from '../config/weddingConfig';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const AirportsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Note = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  font-style: italic;
  text-align: center;
`;

const ShuttleSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
`;

const ShuttleTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ShuttleInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ShuttleSchedule = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ScheduleItem = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.charcoal};
`;

const ShuttleNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
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
