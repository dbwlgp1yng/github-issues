import { StyledHeader } from "./Header.styled";
import { useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

export default function Header({ owner, repo }: {
  owner: string,
  repo: string
}) {

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }
  return (
    <StyledHeader>
      <div onClick={navigateToHome}>
        <AiFillGithub className="github_icon" />
        <span className="owner">{owner} </span>
        <span className="repo">/{repo}</span>
      </div>
    </StyledHeader>
  );
}