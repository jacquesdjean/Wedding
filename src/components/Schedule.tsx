import styled from 'styled-components';
import { Section } from './Section';
import { Timeline } from './Timeline';
import { weddingConfig } from '../config/weddingConfig';

const ScheduleHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const ScheduleNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.mediumGray};
  font-style: italic;
  max-width: 500px;
  margin: 0 auto;
`;

export const Schedule: React.FC = () => {
  return (
    <Section id="schedule" background="cream">
      <ScheduleHeader>
        <SectionTitle>The Weekend</SectionTitle>
        <ScheduleNote>{weddingConfig.copy.scheduleNote}</ScheduleNote>
      </ScheduleHeader>
      <Timeline days={weddingConfig.schedule} />
    </Section>
  );
};
