export interface RespuestaNoticia {
  pagination: Pagination;
  data: Noticia[];
}

export interface Noticia {
  author?: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image?: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}