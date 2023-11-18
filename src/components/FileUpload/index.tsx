import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import Upload from "@/public/assets/upload.png"

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      setSelectedFile(file || null);
    };

  return (
    <>
    <label
      htmlFor="upload"
      className="text-left bg-white-2 text-md mb-2 font-medium transition-all duration-300 opacity-100 md:w-[600px] border-2 border-dashed border-primary bg-gray-300 rounded-md h-[300px] flex items-center flex-col justify-center"
    >
        <input
          type="file"
          id="upload"
          name="upload"
          className="hidden"
          onChange={handleFileChange}
        />

      {selectedFile && (
        <p className="mb-6 text-light-black-6 flex items-center">
           {selectedFile.name}
        </p>
      )}

      <div className='flex flex-col gap-3 justify-center items-center'>
        <Image src={Upload} alt={''} />
        <p className='cursor-pointer text-base font-semibold'>Click to Drop Files Here</p>
      </div>
    </label>
    </>
  );
};

export default FileUpload;