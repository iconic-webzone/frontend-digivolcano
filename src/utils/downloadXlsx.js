import * as XLSX from "xlsx";

const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    // const workbook = XLSX.utils.book_new();
    const workbook = {}
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    // const wbout = XLSX.write(workbook,{type: "blob",bookType:'xlsx'})
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };


export default downloadExcel ;
