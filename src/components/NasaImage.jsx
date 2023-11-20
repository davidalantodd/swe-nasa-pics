import { useEffect, useState } from 'react'
import { nasaDate } from '../utils/formatDate'

export default function NasaImage({ date, size }) {
  const [img, setImg] = useState(null)

  useEffect(() => {
    fetchImg()
  }, [date])

  async function fetchImg() {
    const url = new URL('/planetary/apod', 'https://api.nasa.gov')
    url.searchParams.set('api_key', import.meta.env['VITE_NASA_KEY'])
    url.searchParams.set('date', nasaDate(date))
    const res = await fetch(url)
    const data = await res.json()
    setImg(data)
  }

  if(img){
    return <img src={img.url} className='nasa-img' alt={img.title} width={`${size}%`} />
  } else {
    return <img src='/loading.jpeg' className='nasa-img' alt="loading" width={`100`} />
  }
}
