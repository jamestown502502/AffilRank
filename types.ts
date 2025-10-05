
export interface ProgramResult {
  rank: number;
  name: string;
  program_url: string;
  commission_raw: string;
  cookie_duration: number;
  score: number;
}

export type AppState = 'idle' | 'loading' | 'results';
