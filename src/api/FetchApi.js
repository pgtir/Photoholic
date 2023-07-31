import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const useFetch = (path) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}${path}&client_id=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
