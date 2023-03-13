export interface GetMeInfoType {
  error: string;
  errors: Error[];
  value: MeData;
}

export interface Error {
  code: string;
  message: string;
}

export interface MeData {
  company: Company;
  memberType: string;
  name: string;
  spaceList: Space[];
  team: Team;
}

export interface Company {
  address: string;
  ceo: string;
  id: number;
  name: string;
  telNumber: string;
}

export interface Space {
  description: string;
  icon: string;
  id: number;
  isPublic: boolean;
  name: string;
  boardList: Board[];
}

export interface Board {
  id: number;
  name: string;
  orderNum: number;
}

export interface Team {
  id: number;
  name: string;
}
