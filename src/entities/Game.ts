import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  //                  weird design from API side
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
