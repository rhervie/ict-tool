import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function useResult (id) {
    const { data, error, isLoading } = useSWR(`/api/results`, fetcher)

    // const newResult = data.filter(result => result._id === id)
  
    return {
      result: data,
      isLoading,
      isError: error
    }
  }

  