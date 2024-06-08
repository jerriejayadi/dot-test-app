import api from ".";
import { GetPostProps } from "./types/object";

export const getObject = (): Promise<GetPostProps[]> => {
  return api.get(`/posts`);
};
