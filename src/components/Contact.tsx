import styled from 'styled-components';
import { Section } from './Section';
import { weddingConfig } from '../config/weddingConfig';

const ContactContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.darkCharcoal};
`;

const Intro = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.7;
`;

const EmailLink = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.sage};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border: 2px solid ${({ theme }) => theme.colors.sage};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:hover {
    background-color: ${({ theme }) => theme.colors.sage};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const DeclineNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};
  font-style: italic;
  max-width: 450px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const Contact: React.FC = () => {
  return (
    <Section id="contact" background="cream">
      <ContactContent>
        <SectionTitle>Questions?</SectionTitle>
        <Intro>We can't wait to celebrate with you.</Intro>
        <EmailLink href={`mailto:${weddingConfig.contact.email}`}>
          {weddingConfig.contact.email}
        </EmailLink>
        <DeclineNote>{weddingConfig.copy.declineNote}</DeclineNote>
      </ContactContent>
    </Section>
  );
};
