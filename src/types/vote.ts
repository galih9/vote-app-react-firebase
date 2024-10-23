export interface IVoter {
  name: string;
  email: string;
  voteStatus: boolean;
}

export interface ICandidates {
  name: string;
  img: string;
  voteCount: number;
  visi?: string;
  misi?: string;
}

export type DailyStars = {
  stars: number;
  contestant: string;
  color: string;
};

export type Series = {
  label: string;
  data: DailyStars[];
};

export const data: Series[] = [
  {
    label: "Charts",
    data: [
      {
        stars: 123,
        contestant: "Johan",
        color: "#ff4747"
      },
      {
        stars: 75,
        contestant: "Abdul",
        color: "#21f236"
      },
      // ...
    ],
  },
];