import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function MyDatePicker({ date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker value={date} onChange={newDate => setDate(newDate)} />
    </LocalizationProvider>
  )
}
