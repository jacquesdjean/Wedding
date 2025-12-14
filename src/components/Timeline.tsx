import styled from 'styled-components';

interface TimelineEvent {
  name: string;
  time: string;
  location: string;
  description?: string;
  attire?: string;
}

interface TimelineDay {
  day: string;
  theme?: string;
  isMainDay?: boolean;
  events: TimelineEvent[];
}

interface TimelineProps {
  days: TimelineDay[];
}

const TimelineWrapper = styled.div`
  /* Mobile-first: full width */
  max-width: 100%;

  ${({ theme }) => theme.media.tablet} {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const DayBlock = styled.div<{ $isMainDay?: boolean }>`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border-left: 4px solid ${({ $isMainDay, theme }) =>
    $isMainDay ? theme.colors.yellow : theme.colors.navy};

  &:last-child {
    margin-bottom: 0;
  }
`;

const DayHeader = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sand};
`;

const DayTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.navy};
  /* Mobile-first */
  font-size: 1.25rem;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }
`;

const DayTheme = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EventItem = styled.div`
  /* Mobile-first: stacked layout */
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.cream};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: auto 1fr auto;
    align-items: start;
  }
`;

const EventTime = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.navy};
  letter-spacing: 0.05em;
  min-width: 80px;

  ${({ theme }) => theme.media.tablet} {
    min-width: 140px;
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const EventName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.charcoal};
`;

const EventDescription = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const EventLocation = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
  font-style: italic;

  ${({ theme }) => theme.media.tablet} {
    text-align: right;
  }
`;

const AttireBadge = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.yellowLight};
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: 0.5rem;
`;

export const Timeline: React.FC<TimelineProps> = ({ days }) => {
  return (
    <TimelineWrapper>
      {days.map((day, dayIndex) => (
        <DayBlock key={dayIndex} $isMainDay={day.isMainDay}>
          <DayHeader>
            <DayTitle>{day.day}</DayTitle>
            {day.theme && <DayTheme>{day.theme}</DayTheme>}
          </DayHeader>
          <EventsList>
            {day.events.map((event, eventIndex) => (
              <EventItem key={eventIndex}>
                <EventTime>{event.time}</EventTime>
                <EventDetails>
                  <EventName>{event.name}</EventName>
                  {event.description && (
                    <EventDescription>{event.description}</EventDescription>
                  )}
                  <EventLocation>{event.location}</EventLocation>
                  {event.attire && <AttireBadge>{event.attire}</AttireBadge>}
                </EventDetails>
              </EventItem>
            ))}
          </EventsList>
        </DayBlock>
      ))}
    </TimelineWrapper>
  );
};
