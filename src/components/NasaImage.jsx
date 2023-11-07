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
    console.log(url.toString())
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setImg(data)
  }

  return !!img && <img src={img.url} className='nasa-img' width={`${size}%`} />
}
