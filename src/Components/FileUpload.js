import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "tailwindcss/tailwind.css";
import { uploadFile } from "../Services/ReportService";
import LoadingIcon from "./LoadingIcon";

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [fileUploadedResult, setFileUploadedResult] = useState({
        isValid: 0,
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [uploadStudentData, setUploadStudentData] = useState(true);
    const activeButtonClass = "mx-2 bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
    const deActiveButtonClass = "mx-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
        formData.append("Attachment", file);
        setLoading(true);
        uploadFile(formData, uploadStudentData).then((resp) => {
            if (resp.code != -1) {
                setFileUploadedResult({ isValid: 1, message: resp.message });
            } else {
                setFileUploadedResult({ isValid: -1, message: resp.message });
            }
            setLoading(false);
        }).catch((message) => {
            setFileUploadedResult({ isValid: -1, message });
            setLoading(false);
        })

    };
    const clearFiles = () => {
        setFile(null);
        setFileName("");
        setFileUploadedResult({ isValid: 0, message: "" });
    }
    return (
        <div className="flex flex-col items-center justify-center m-5">
            <div className="flex items-center justify-center m-5">
                <button onClick={() => { setUploadStudentData(true); clearFiles() }} class={uploadStudentData ? activeButtonClass : deActiveButtonClass}>
                    Upload Student Data
                </button>
                <button onClick={() => { setUploadStudentData(false); clearFiles() }} class={uploadStudentData ? deActiveButtonClass : activeButtonClass}>
                    Upload Transaction Data
                </button>
            </div>
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
            {fileUploadedResult.isValid ? (
                <div class={`p-4 mb-4 text-sm dark:bg-gray-800 rounded-lg   ${fileUploadedResult.isValid > 0 ? ' text-green-800 bg-green-50 dark:text-green-400' : 'text-red-800 bg-red-50 dark:text-red-400'}`} role="alert">
                    <span class="font-medium">{fileUploadedResult.message}</span>
                </div>) : <div />}
            {loading && <LoadingIcon />}
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