import { ExpensesChart } from '@/components/expenses-chart'
import React from 'react'

export default function Overview() {
  return (
    <div className='px-6 pt-6'>
      <h1 className='text-3xl font-bold mb-4'>Overzichten</h1>
      <ExpensesChart />
    </div>
  )
}
