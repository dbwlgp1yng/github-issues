import Header from "./components/Header";
import IssuesList from "./pages/IssuesList";
import { IssuesProvider } from './contexts/IssuesListContext';

function App() {
  const owner = 'facebook';
  const repo = 'react';

  return (
    <IssuesProvider owner={owner} repo={repo}>
      <Header owner={owner} repo={repo}/>
      <IssuesList />
    </IssuesProvider>
  );
}

export default App;
