export interface IMovie {
  title: string;
  id: number;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  adult?: boolean;
  video?: boolean;
  original_title?: string;
  spoken_languages?: any;
}
export type movies = IMovie[];


