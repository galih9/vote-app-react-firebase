export interface UserType {
  userId: string;
  name: string;
  email: string;
  voteStatus?: boolean | null;
}

export interface ICaption {
  title: string;
  desc: string;
  img: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  password: string;
  email: string;
  password2: string;
}
