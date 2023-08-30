import { useIssuesContext } from "../contexts/IssuesListContext";
import { StyledHeader } from "./Header.styled";

export default function Header({ owner, repo }: {
  owner: string,
  repo: string
}) {
  const issuesContext = useIssuesContext();
  
  return (
    <StyledHeader>
      {owner}/{repo}
    </StyledHeader>
  );
}