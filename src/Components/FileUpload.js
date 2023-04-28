import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "tailwindcss/tailwind.css";
import { uploadFile } from "../Services/ReportService";

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("Choose file");

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0]);
            setFileName(acceptedFiles[0].name);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        uploadFile(formData).then((resp) => {
            console.log(resp);
        })
        // try {
        //     const res = await axios.post("https://your-api-endpoint.com/upload", formData);
        //     console.log(res.data);
        // } catch (err) {
        //     console.error(err);
        // }
    };
    const clearFiles = () => {
        setFile(null);
    }
    return (
        <div className="flex flex-col items-center justify-center m-5">
            <div
                {...getRootProps()}
                className="w-full max-w-md p-8 mx-auto border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-gray-500"
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="text-2xl font-semibold text-gray-500">Drop your file here</p>
                ) : (
                    <p className="text-2xl font-semibold text-gray-500">
                        <FiUpload className="inline-block mb-1 mr-2 text-gray-400" />
                        Drag &amp; drop or{" "}
                        <span className="underline text-blue-500 hover:text-blue-700">
                            browse
                        </span>{" "}
                        your file here
                    </p>
                )}
                <p className="mt-2 text-sm text-gray-500">{fileName}</p>
            </div>
            {file && (
                <div>
                    <button
                        onClick={handleSubmit}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Upload
                    </button>
                    <button
                        onClick={clearFiles}
                        className="mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
};

export default UploadFile;