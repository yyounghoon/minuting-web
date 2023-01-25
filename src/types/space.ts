export interface CreateSpaceType {
  description: string;
  icon: string;
  isPublic: boolean;
  name: string;
  permissions: Permission[];
  tagIdList: number[];
}

export interface Permission {
  memberId: string;
  type: string;
}

export interface PublicSpacesType {
  error: null;
  errors: null;
  list: List[];
}

export interface List {
  id: number;
  name: string;
  description: string;
  icon: string;
  isPublic: boolean;
  isJoined: boolean;
}
