import Image from "next/image";
import FileUploader from "@/components/FileUploader";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
     <FileUploader/>
     <FileUploader/>
     <FileUploader/>
     <FileUploader/>
    </main>
  );
}
