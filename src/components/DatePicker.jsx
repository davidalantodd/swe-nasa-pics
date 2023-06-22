import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DateContext } from '../contexts/DateContext'
import { useContext } from 'react'

export default function MyDatePicker() {
  const { date, setDate } = useContext(DateContext)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker value={date} onChange={newDate => setDate(newDate)} />
    </LocalizationProvider>
  )
}
