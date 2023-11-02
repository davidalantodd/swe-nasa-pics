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

  return !!img && <img src={img.url} data-testid="nasa-image" className='nasa-img' width={`${size}%`} />
}
