import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import Upload from "@/public/assets/upload.png";
import { BsTrash } from "react-icons/bs";

interface FileUploadProps {
  onFileChange: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newFiles: File[] = Array.from(files);
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...newFiles];
      onFileChange(updatedFiles);
      return updatedFiles;
    });
      // onFileChange([...BsTrash.prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (index: number) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      onFileChange(updatedFiles);
      return updatedFiles;
    });
  };

  return (
    <>
      <div>
        <label
          htmlFor="fileInput"
          className="cursor-pointer text-left bg-white-2 text-md mb-2 font-medium transition-all duration-300 opacity-100 md:w-[600px] border-2 border-dashed border-primary bg-gray-300 rounded-md h-[300px] flex items-center flex-col justify-center"
        >
          <Image src={Upload} alt={""} className="mr-2" />
          Click to Drop Files Here
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <p className="font-bold mb-2">Selected Files:</p>
            <ul>
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white py-2 px-4"
                >
                  <p className=" text-primary text base font-semibold">
                    {file.name}
                  </p>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteFile(index)}
                  >
                    <BsTrash />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default FileUpload;
