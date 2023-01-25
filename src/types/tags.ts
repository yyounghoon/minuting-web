export interface GetTagResponse {
  error: null;
  errors: null;
  list: TagType[];
}

export interface TagType {
  id: number;
  name: string;
  type: 'SPACE';
  color: string;
  orderNum: number;
}
