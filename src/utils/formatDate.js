import { format } from 'date-fns'

export function readableDate(date) {
  return format(date, 'MM/dd/yyyy')
}

export function nasaDate(date) {
  return format(date, 'yyyy-MM-dd')
}
