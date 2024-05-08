'use client'
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Wrapper} from "@/app/layouts/Wrapper";
import {Button} from "@/components/ui/button";
import {ChangeEvent, useRef, useState} from "react";
import {FileUploader} from "@/components/ui/fileuploader";

export const LessonForm = () => {
  const [contentList, setContentList] = useState<Array<Content>>([]);

  const addContent = () => {
    setContentList([...contentList, {id: getId(), type: 'text', video: '', text: '', order: contentList.length + 1}])
  }

  const changeContentItem = (id: string, mix: Record<any, any>) => {
    setContentList(contentList.map(i => i.id === id ? {...i, ...mix} : i))
  }
  const setText = (id: string, text: string) => {
    changeContentItem(id, {text})
  }
  const setVideo = (id: string, video: string) => {
    changeContentItem(id, {video})
  }
  const setOrder = (id: string, order: number) => {
    changeContentItem(id, {order})
  }
  const setType = (id: string, type: string) => {
    changeContentItem(id, {type})
  }

  return (
    <Wrapper className="flex-1 my-12 space-y-12">
      <h1 className="mb-3 font-bold text-xl">Create Lesson</h1>
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="md:flex-1 max-w-[500px]">
          <div className="space-y-5">
            <div>
              <label className="mb-3 block" htmlFor="name">Name</label>
              <Input type="text" id="name"/>
            </div>
            <div>
              <label className="mb-3 block" htmlFor="description">Description</label>
              <Textarea id="description" value=""/>
            </div>
            <div>
              <label className="mb-3 block" htmlFor="currency">Course</label>
              <Select>
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Name of course"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Russian without letters</SelectItem>
                  <SelectItem value="dark">Russian Entry Course</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-3 block" htmlFor="currency">Unit</label>
              <Select>
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Name of course"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Russian without letters</SelectItem>
                  <SelectItem value="dark">Russian Entry Course</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {contentList.map(i =>
              <ContentItem key={i.id} id={i.id} type={i.type} video={i.video} text={i.text} order={i.order}
                           setText={setText} setVideo={setVideo} setOrder={setOrder} setType={setType}
              />
            )}
            <Button onClick={addContent}>Add Content</Button>
            <div className="flex items-center gap-4">
              <Button className="flex-1 bg-violet-400 hover:bg-violet-200 transition">Save</Button>
              <Button className="flex-1">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

type Content = {
  id: string
  type?: string
  text?: string
  video?: string
  order?: number
}

type ContentItemProps = {
  setText: (id: string, text: string) => void
  setVideo: (id: string, video: string) => void
  setOrder: (id: string, order: number) => void
  setType: (id: string, type: string) => void
} & Content

const ContentItem = ({type, text, id, video, order, setText, setVideo, setOrder, setType}: ContentItemProps) => {
  const setTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(id, e.target.value)
  }
  const setOrderHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setOrder(id, Number(e.target.value))
  }
  const setTypeHandler = (value: string) => {
    console.log('SETTYPE', value)
    setType(id, value)
  }

  const setVideoHandler = (src: string) => {
    setVideo(id, src)
  }


  return (
    <div key={id} className="border pb-6 pt-4 px-4 space-y-5 rounded-xl">
      <Select onValueChange={setTypeHandler}>
        <SelectTrigger className="w-[100%]">
          <SelectValue placeholder="Type of content"/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="text">Text</SelectItem>
          <SelectItem value="video">Video</SelectItem>
        </SelectContent>
      </Select>
      <Input type="number" value={order} onChange={setOrderHandler}/>
      {type === 'text'
        ? <Textarea id="description" value={text} onChange={setTextHandler}/>
        : <VideoContent video={video || ''} setVideo={setVideoHandler}/>
      }
    </div>
  )
}


const getId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}


type VideoContentProps = {
  video: string
  setVideo: (src: string) => void
}
const VideoContent = ({video, setVideo}: VideoContentProps) => {
  const [src, setSrc] = useState(video || '')
  const ref = useRef<HTMLInputElement>(null)

  const saveSrc = () => {
    setSrc(prev => {
      setVideo(prev)
      return ''
    })
  }
  const clearVideo = () => setSrc('')

  const removeVideo = () => {
    setVideo('')
  }

  if (!video) {
    return (
      <div className="space-y-3">
        <Input ref={ref} type="text" value={src} onChange={(e) => setSrc(e.target.value)}/>
        <div className="flex gap-4">
          <Button onClick={saveSrc}>save</Button>
          <Button onClick={clearVideo}>cancel</Button>
        </div>
      </div>
    )
  }


  return (
    <div className="space-y-3">
      <video width="920" height="440" controls>
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <Button onClick={removeVideo}>remove</Button>
    </div>
  )
}