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
  max-width: 900px;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  svg {
    opacity: 0.35;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.05rem;
    margin: 0 0 6px;
  }
  p {
    margin: 0;
    font-size: 0.88rem;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
`;

export { EmptyState, Header, List, LoadingState };
