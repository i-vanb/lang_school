'use client'
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Wrapper} from "@/app/layouts/Wrapper";
import {FileUploader} from "@/components/ui/fileuploader";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {CourseT} from "@/app/types";
import {useFormState} from "react-dom";
import {createCourseForm} from "@/lib/actions/course";


type CourseFormProps = {
  banner?: string
  title: string
  description?: string
  price?: number
  discount?: number
  premiumPrice?: number
  currency?: number
  listCurrency: Array<Currency> | []
}

type Currency = {
  id: number
  name: string
  symbol: string
}

export const CourseForm = (props: CourseFormProps) => {
  const [state, formAction] = useFormState(createCourseForm, {
    message: ""
  })

  const [banner, setBanner] = useState(props.banner || "")

  const [title, setTitle] = useState(props.title || "")
  const [description, setDescription] = useState(props.description || "")
  const [price, setPrice] = useState(props.price || 0)
  const [discount, setDiscount] = useState(props.discount || 0)
  const [premiumPrice, setPremiumPrice] = useState(props.premiumPrice || 0)
  const [currency, setCurrency] = useState<number>(props.currency || 1)
  // const [tags, setTags] = useState("")

  return (
    <Wrapper className="flex-1 my-12 space-y-12">
      <form action={formAction}>
        <h1 className="mb-3 font-bold text-xl">Create Course</h1>
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <div className="md:flex-1">
            <div className="space-y-5">
              <div>
                <label className="mb-3 block" htmlFor="title">Name</label>
                <Input type="text" id="title" value={title} name="title"
                       onChange={e => setTitle(e.target.value)}/>
                {state?.error?.name == 'title' && <span className="text-red-400">{state.error.message}</span>}
              </div>
              <div>
                <label className="mb-3 block" htmlFor="description">Description</label>
                <Textarea id="description" value={description} name="description"
                          onChange={e => setDescription(e.target.value)}/>
              </div>
              <div>
                <label className="mb-3 block" htmlFor="price">Price</label>
                <Input type="number" id="price" value={price || ""} name="price"
                       onChange={e => setPrice(Number(e.target.value))}/>
              </div>
              <div>
                <label className="mb-3 block" htmlFor="discount">Discount</label>
                <Input type="number" id="discount" value={discount || ""} name="discount"
                       onChange={e => setDiscount(Number(e.target.value))}/>
              </div>
              <div>
                <label className="mb-3 block" htmlFor="premiumPrice">Premium Price</label>
                <Input type="number" id="premiumPrice" value={premiumPrice || ""} name="premiumPrice"
                       onChange={e => setPremiumPrice(Number(e.target.value))}/>
              </div>
              <div>
                <label className="mb-3 block" htmlFor="currency">Currency</label>
                <Select name="currency" value={currency.toString()} onValueChange={val => setCurrency(Number(val))}>
                  <SelectTrigger className="w-[100%] uppercase">
                    <SelectValue placeholder="Currency"/>
                  </SelectTrigger>
                  <SelectContent>
                    {props.listCurrency.map(i =>
                      <SelectItem key={i.id} value={i.id.toString()} className="uppercase">{i.name}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Button disabled={!title} type="submit"
                        className="flex-1 bg-violet-400 hover:bg-violet-200 transition">Save</Button>
                <Button className="flex-1" type="reset">Cancel</Button>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <div className="space-y-5">
              <div>
                <label className="mb-3 block" htmlFor="premiumPrice">Course Banner</label>
                <div className="relative">
                  {banner && <Banner image={banner} />}
                  <FileUploader setFile={setBanner} name="banner" isHidden={!!banner} file={banner} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}


const Banner = ({image}: { image: string}) => {
  return (
    <div className="w-full h-full relative">
      <img src={image}/>
    </div>
  )
}