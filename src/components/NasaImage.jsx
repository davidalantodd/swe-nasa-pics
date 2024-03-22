import { useContext, useEffect, useState } from 'react'
import { DateContext } from '../contexts/DateContext'
import { nasaDate } from '../utils/formatDate'
import { SizeContext } from '../contexts/SizeContext'

// remove prop
export default function NasaImage() {
  const { date } = useContext(DateContext)
  const [img, setImg] = useState(null)
  // import our prop using the useContext hook
  const { size } = useContext(SizeContext)

  useEffect(() => {
    fetchImg()
  }, [date])

  async function fetchImg() {
    const url = new URL('/planetary/apod', 'https://api.nasa.gov')
    url.searchParams.set('api_key', import.meta.env['VITE_NASA_KEY'])
    url.searchParams.set('date', nasaDate(date))
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setImg(data)
  }

  return !!img && <img src={img.url} className='nasa-img' width={`${size}%`} />
}
