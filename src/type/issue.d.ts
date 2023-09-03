export interface IssueType {
  id: number;
  number: number;
  html_url: string;
  created_at: string;
  state: string;
  body?: string | null;
  title: string;
  comments: number;
  user: { 
    login: string,
    avatar_url: string
  };
}