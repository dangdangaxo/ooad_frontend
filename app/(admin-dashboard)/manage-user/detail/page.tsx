'use client'
import React from 'react'
import {
  PencilSquareIcon,
  ArrowRightCircleIcon,
  TrashIcon,
  PlusIcon,
  ArrowLeftCircleIcon
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useSearchParams, useRouter } from 'next/navigation'
import Link from "next/link";
import { log } from 'console';

const InfoField=(props:{
    lable?: any
    data:any
})=>{
    return(
        <div className='flex border-2 mb-3 p-4 w-6/12 rounded-2xl border-neutral-400'>
            <div className='ml-2 flex'>
                <h1 className='font-bold mr-1'>{props.lable}:</h1>
                <h1>{props.data}</h1>
            </div>
        </div>
    )
}

const Page = ()=>{
    const params = useSearchParams();
    const data = {
        id: params.get('id'),
        agent:params.get('agent'),
        date:params.get("date"),
        location: params.get('location'),
        name: params.get('name'),
        review: params.get('review'),
        status:params.get('status') 
    }
    return(
        <div className="bg-[var(--bg-2)]">
      <div className="flex items-center flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <Link href="/manage-user" className='btn-primary'>
          <ArrowLeftCircleIcon className="w-8 h-8" />
        </Link>
        <h2 className="h2 text-white center text-center">Detail user</h2>
      </div>
      <div className='mt-5 mx-5 items-center flex-col flex'>
        <div className='w-full items-center flex-col flex'>
            <InfoField lable='ID'  data={data.id}/>
            <InfoField lable='Agent' data={data.agent}/>
            <InfoField lable='Date' data={data.date}/>
            <InfoField lable='Location' data={data.location}/>
            <InfoField lable='Name' data={data.name}/>
            <InfoField lable='Review' data={data.review}/>
            <InfoField lable='Status' data={data.status}/>

        </div>
      </div>
    </div>
  )
    
}

export default Page;