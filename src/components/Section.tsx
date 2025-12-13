import styled from 'styled-components';

interface SectionProps {
  id?: string;
  background?: 'white' | 'cream' | 'sand' | 'sage';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const SectionWrapper = styled.section<{ $background: string }>`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme, $background }) => {
    switch ($background) {
      case 'cream':
        return theme.colors.cream;
      case 'sand':
        return theme.colors.sand;
      case 'sage':
        return theme.colors.lightSage;
      default:
        return theme.colors.white;
    }
  }};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing['2xl']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing['5xl']} ${({ theme }) => theme.spacing['3xl']};
  }
`;

const SectionContent = styled.div<{ $fullWidth: boolean }>`
  max-width: ${({ theme, $fullWidth }) => ($fullWidth ? 'none' : theme.maxWidth)};
  margin: 0 auto;
`;

export const Section: React.FC<SectionProps> = ({
  id,
  background = 'white',
  children,
  fullWidth = false,
}) => {
  return (
    <SectionWrapper id={id} $background={background}>
      <SectionContent $fullWidth={fullWidth}>{children}</SectionContent>
    </SectionWrapper>
  );
};
