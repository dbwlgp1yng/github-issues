import { StyledHeader } from "./Layout.styled";
import { Link, Outlet } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Link to='/' className='header_wrap'>
          <AiFillGithub className="github_icon" />
          <span className="owner">facebook</span>
          <span>/</span>
          <span className="repo">react</span>
        </Link>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}