import { Route, Routes } from 'react-router-dom';
import IssuesList from './pages/IssuesList/IssuesList';
import IssuesDetail from './pages/IssuesDetail/IssuesDetail';
import Layout from "./components/Layout/Layout";
import { Error } from './pages';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IssuesList />} />
          <Route path="/issues/:id" element={<IssuesDetail />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;
