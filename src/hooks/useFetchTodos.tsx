import { AxiosResponse } from "axios";
import { PostModel } from "../entities/posts";
import { client } from "../utils/clients";
import { QueryObserverResult, useQuery } from "@tanstack/react-query";

const fetchPosts = async (): Promise<AxiosResponse<PostModel[], any>> => {
  return await client.get<PostModel[]>("/posts");
};

export const useFetchPosts = (): QueryObserverResult<PostModel[], any> => {
  return useQuery<PostModel[], any>({
    queryFn: async () => {
      const { data } = await fetchPosts();
      return data;
    },
    queryKey: ["posts"],
  });
};
