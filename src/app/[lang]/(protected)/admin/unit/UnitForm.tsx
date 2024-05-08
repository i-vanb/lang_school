'use client'
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Wrapper} from "@/app/layouts/Wrapper";
import {FileUploader} from "@/components/ui/fileuploader";
import {Button} from "@/components/ui/button";

export const UnitForm = () => {
  return(
    <Wrapper className="flex-1 my-12 space-y-12">
      <h1 className="mb-3 font-bold text-xl">Create Unit</h1>
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
