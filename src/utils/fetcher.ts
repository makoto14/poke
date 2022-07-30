import axios from "axios";

export const fetcher = <T>(url: string): Promise<T> =>
  axios(url).then((res) => res.data);
