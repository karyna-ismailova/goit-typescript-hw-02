import axios from "axios";
const ACCESS_KEY = "bHocYJuF3m046LmIfMAyWhqTHDX0MotdTg8pnUc4cGw";

export const fetchImages = async (
  query: string,
  page: number,
  signal?: AbortSignal
) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: { query, page, per_page: 9 },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    signal,
  });

  return response.data;
};
