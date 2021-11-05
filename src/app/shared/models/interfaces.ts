export interface Movie {
  dates?: any;
  page: number;
  results: MovieResults[];
  total_results: number;
  total_pages: number;
}

export interface MovieResults {
  ratings: any;
  applyClass: string;
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: any[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Favorites {
  id: any;
  title: string;
  overview: string;
  ratings: string;
  poster_path: string;
  applyClass: string;
  release_date: Date;
  adult: boolean;
}

export interface User {
  username: string;
  password: string;
  request_token?: string;
}

export interface movidbAuthResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}


/*{

}*/
