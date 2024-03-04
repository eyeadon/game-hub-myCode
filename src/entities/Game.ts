import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  description_raw: string;
  background_image: string;
  //                  weird design from API side
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
}
