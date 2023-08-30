import Header from "./components/Header";
import { IssuesProvider } from './contexts/IssuesContext';
import { Route, Routes } from 'react-router-dom';
import IssuesList from './pages/IssuesList';
import IssuesDetail from './pages/IssuesDetail';
import Error from './pages/Error';

const IssuesRoutes = () => (
  <Routes>
    <Route path="/" element={<IssuesList />} />
    <Route path="/issues/:id" element={<IssuesDetail />} />
    <Route path="*" element={<Error />} /> 
  </Routes>
);

function App() {
  const owner = 'facebook';
  const repo = 'react';

  return (
    <IssuesProvider owner={owner} repo={repo}>
      <Header owner={owner} repo={repo}/>
      <IssuesRoutes />
    </IssuesProvider>
  );
}

export default App;
