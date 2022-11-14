import { useEffect, useState } from 'react'
import axios from 'axios'

const getPhotos = async (pageNumber, setImages, setHasMore, setPages, setError) => {
    await axios
    .get(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&per_page=8&page=${pageNumber}`)
    .then(res => {
        setImages((images) => [...images, ...res.data]);
      setHasMore(res.data.length > 0)
      setPages((pages) => pages + 1)
    //   setLoading(false)
    })
    .catch(e => {
        setError(true)
      return (e)
    })
}

export default getPhotos;