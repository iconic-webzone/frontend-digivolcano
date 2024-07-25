"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { ArrowBigDownDash, Terminal, Trash2 } from 'lucide-react'
import downloadExcel from "@/utils/downloadXlsx.js"

type ele = {
    items(items: any): void
    emails:Array<string>
    url:String
    _id:Number
    
}


const page = () => {
    const [data, setData] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
   
    React.useEffect(() => {
      fetch('http://localhost:1000/csv/allData')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          console.log(data, 'data');
        })
    }, [isLoading])


    const deleteHandler = (itemid:any) => {
        fetch(`http://localhost:1000/csv/deleteData/${itemid}`,{ method:"DELETE" })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        //   setData(data)
          setLoading(!isLoading)
          console.log(data, 'data');
        })
    }
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">number</TableHead>
                        <TableHead>name</TableHead>
                        <TableHead>date</TableHead>
                        <TableHead className="text-right"></TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        data?.map((ele:ele, index)=>{
                            console.log(ele.items)
                            return <TableRow>
                            <TableCell className="font-medium">{index+1}</TableCell>
                            <TableCell>{ele?.fileName}</TableCell>
                            <TableCell>{ele?.createdAt}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" className='bg-green-500 text-black' onClick={()=>downloadExcel(ele?.items) }>
                                    <ArrowBigDownDash />download file
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" className='bg-red-600 text-white' onClick={()=>deleteHandler(ele?._id) }>
                                    <Trash2/>delete file
                                </Button>
                            </TableCell>
                        </TableRow>
})
                    }
 
                </TableBody>
            </Table>

        </div>
    )
}

export default page