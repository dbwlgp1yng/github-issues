export interface Issue {
  id: number;
  number: number;
  title: string;
  user: { 
    login: string,
    avatar_url: string
  };
  created_at: string;
  comments: number;
  state: string;
  body: string;
  formattedDate: string;
}
