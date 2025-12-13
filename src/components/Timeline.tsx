import styled from 'styled-components';

interface TimelineEvent {
  name: string;
  time: string;
  location: string;
}

interface TimelineDay {
  day: string;
  events: TimelineEvent[];
}

interface TimelineProps {
  days: TimelineDay[];
}

const TimelineWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const DayBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  &:last-child {
    margin-bottom: 0;
  }
`;

const DayTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.sand};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const EventItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-left: 3px solid ${({ theme }) => theme.colors.sage};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: auto 1fr auto;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
  }
`;

const EventTime = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.sage};
  letter-spacing: 0.05em;
  min-width: 140px;
`;

const EventName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const EventLocation = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: right;
  }
`;

export const Timeline: React.FC<TimelineProps> = ({ days }) => {
  return (
    <TimelineWrapper>
      {days.map((day, dayIndex) => (
        <DayBlock key={dayIndex}>
          <DayTitle>{day.day}</DayTitle>
          <EventsList>
            {day.events.map((event, eventIndex) => (
              <EventItem key={eventIndex}>
                <EventTime>{event.time}</EventTime>
                <EventName>{event.name}</EventName>
                <EventLocation>{event.location}</EventLocation>
              </EventItem>
            ))}
          </EventsList>
        </DayBlock>
      ))}
    </TimelineWrapper>
  );
};
