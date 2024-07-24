"use client"
import React, { FormEvent } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowBigUpDash, Loader2 } from 'lucide-react'

const FileUploader = () => {
    const [file, setFile] = React.useState("");

    
    const changeHandler = (e:any) => {
        setFile(e.target.files[0]);
        console.log(file)
    }

    const clickHandler = async() => {
        const data = new FormData() 
        data.append("csvFile", file)


    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        console.log(event.currentTarget,event.target)
        const response = await fetch('http://localhost:1000/csv', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        console.log(data);
      }
    return (
        <>
            <form className="grid w-full max-w-sm items-center gap-1.5" onSubmit={onSubmit}>
                <div>
                    <Label htmlFor="picture">excel file</Label>
                    <Input id="picture" type="file" onChange={changeHandler}/>
                </div>
                <Button variant="secondary" type="submit">
                    <ArrowBigUpDash />upload file
                </Button>
                <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                </Button>
            </form>
        </>

    )
}

export default FileUploader