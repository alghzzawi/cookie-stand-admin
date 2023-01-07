import React from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

export default function Main() {
  return (
    <div class="bg-cover w-full bg-center bg-no-repeat bg-[url('/assets/bgimage.png')]"  >

      <div class="">
        <CreateForm />
      </div>
      
      <div class="w-full">
        <ReportTable />
      </div>

    </div>
  )
}