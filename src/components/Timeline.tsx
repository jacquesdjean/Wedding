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
  /* Mobile-first: full width */
  max-width: 100%;

  ${({ theme }) => theme.media.tablet} {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const DayBlock = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DayTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.darkCharcoal};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sand};
  /* Mobile-first */
  font-size: 1.25rem;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.5rem;
  }
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
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border-left: 3px solid ${({ theme }) => theme.colors.sage};

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
`;

const EventTime = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.sage};
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

  ${({ theme }) => theme.media.tablet} {
    display: contents;
  }
`;

const EventName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const EventLocation = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mediumGray};

  ${({ theme }) => theme.media.tablet} {
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
                <EventDetails>
                  <EventName>{event.name}</EventName>
                  <EventLocation>{event.location}</EventLocation>
                </EventDetails>
              </EventItem>
            ))}
          </EventsList>
        </DayBlock>
      ))}
    </TimelineWrapper>
  );
};
