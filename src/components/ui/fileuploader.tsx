'use client'
import {Inbox} from "lucide-react";
import {ChangeEvent, useRef, useState, MouseEvent} from "react";

type FileUploaderProps = {
  setFile: any
  isHidden?: boolean
  name: string
  file?: string
}

export const FileUploader = ({setFile, isHidden, name, file}: FileUploaderProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const setFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    const urlObject = URL.createObjectURL(file);
    setFile(urlObject)
  }

  const clearFile = () => {
    if (ref.current) ref.current.value = ""
    setFile("")
  }

  return (
    <>
      {isHidden &&
          <button onClick={clearFile} className="absolute top-2 right-2 text-violet-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"/>
              </svg>
          </button>
      }
      <div className={`w-[100%] bg-gray-200 rounded-xl p-2 ${isHidden ? "hidden" : ""}`}>
        <div
          className='border-dashed border-2 rounded-xl cursor-pointer bg-gray-200 py-8 flex justify-center items-center flex-col'>
          {!isHidden && <label className="absolute inset-0" htmlFor={name}></label>}
          <input ref={ref} className="hidden" type="file" id={name} name={name} onChange={setFileHandler}/>
          <>
            <Inbox className="w-10 h-10 text-violet-400"/>
            <p className="text-sm text-gray-500">Click to select file</p>
          </>
        </div>
      </div>
    </>
  )
}