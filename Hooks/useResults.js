import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function useResults () {
    const { data, error, isLoading } = useSWR(`/api/results`, fetcher)
  
    return {
      results: data,
      isLoading,
      isError: error
    }
  }

  