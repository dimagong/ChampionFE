import { Maybe, Scalars } from "./global";

export interface IVideoImages {
    name: Maybe<Scalars['String']>,
    url: Maybe<Scalars['String']>,
}

export interface IAnnounceVideoCard {
    name: string
    player: string
    team: string
    imageUrl: string
    videoUrl: string
}