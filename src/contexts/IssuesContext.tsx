import { createContext, useContext, useState, useEffect } from 'react';
import { Issue } from '../IssuesType';
import { useFetchIssues } from '../hooks/useFetchIssues';

type ContextType = {
  issues: Issue[];
} | null;

const IssuesContext = createContext<ContextType>(null);

export function useIssuesContext() {
  return useContext(IssuesContext);
}

export function IssuesProvider({ owner, repo, children }: any) {
  const { issues, isLoading, error }: any = useFetchIssues(owner, repo);
  const contextValue = {
    issues: issues, // useFetchIssues에서 가공한 데이터 그대로 사용
  };

  return (
    <IssuesContext.Provider value={contextValue}>
      {!isLoading ? ( 
        error ? (
          <div>Error loading issues</div>
        ) : (
          children
        )
      ) : (
        <div>Loading...</div>
      )}
    </IssuesContext.Provider>
  );
}
