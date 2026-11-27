import styled from "styled-components";

const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin: 0 0 4px;
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 900px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textSecondary};
  svg {
    opacity: 0.3;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    margin: 0 0 ${({ theme }) => theme.spacing.sm};
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export { EmptyState, Header, List, LoadingState };
