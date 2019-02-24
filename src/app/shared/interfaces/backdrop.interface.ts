export interface IBackdrop {
  aspect_ratio: number;
  file_path: string;
  height: number;
  width: number;
  vote_average: number;
  vote_count: number;
  iso_639_1?: any;
}
export type backdrops = IBackdrop[];
