export interface User {
  _id: string;
  username: string;
  imgUrl?: string;
  breed?: string;
  birth?: Date;
  about?: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  gender?: "female" | "male" | "non-binary";
  favs?: string[];
  fans?: string[];
}
