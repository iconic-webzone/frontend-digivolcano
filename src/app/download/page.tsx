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
import { ArrowBigDownDash, Terminal } from 'lucide-react'
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
    }, [])
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
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        data?.map((ele:ele)=>{
                            console.log(ele.items)
                            return <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>01.xlsx</TableCell>
                            <TableCell>25-feb</TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" onClick={()=>downloadExcel(ele?.items) }>
                                    <ArrowBigDownDash />download file
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