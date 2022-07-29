export interface IExercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export interface IVideo {
  video: {
    channelName: string;
    title: string;
    videoId: string;
    thumbnails: { url: string }[];
  };
}
