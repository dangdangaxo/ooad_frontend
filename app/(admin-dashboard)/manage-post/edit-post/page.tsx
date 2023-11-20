import React from 'react'
import {
  PencilSquareIcon,
  ArrowRightCircleIcon,
  TrashIcon,
  PlusIcon,
  ArrowLeftCircleIcon
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";

type Props = {}

const InputCustom = (props:{
  title:any,
  placholder:any,
  mutiple:any
})=>{
  return(
    <div className='w-4/12 mr-10 mt-5 justify-self-center' >
      <h1 className='text-lg mb-2'>{props.title}</h1>
      {props.mutiple ? (
        <textarea placeholder={props.placholder} className='border-solid border-2 leading-8 w-full' cols={10}/>
      ):(
        <input placeholder={props.placholder} className='border-solid border-2 leading-8 w-full'/>
      )}
      
    </div>
  )
}

const Page = (props: Props) => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <Link href="/manage-post" className='btn-primary'>
          <ArrowLeftCircleIcon className="w-8 h-8" />
        </Link>
        <h2 className="h2 text-white center text-center">Edit posts</h2>
      </div>
      <div className='mt-5 mx-5 items-center flex-col flex'>
        <div className='w-full items-center flex-col flex'>
          <InputCustom title="Name" placholder="Write your name ..." mutiple={false}/>
          <InputCustom title="Name" placholder="Write your name ..." mutiple={false}/>
          <InputCustom title="Name 2" placholder="Write your name ..." mutiple={true}/>
        </div>
        <div className='hover:bg-sky-700 btn-primary mt-10'>
          <button>Save changes</button>
        </div>
      </div>
    </div>
  )
}

export default Page;