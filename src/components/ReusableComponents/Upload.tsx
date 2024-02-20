import React, { useState, useRef } from "react";
import "./Upload.css";

interface UploadProps {
  onSelect: (file: string) => void;
  onRemove: (error: string) => void;
}

const Upload: React.FC<UploadProps> = ({ onSelect, onRemove }) => {
  const [base64Url, setBase64Url] = useState<string | null>(null); // State to store the base64 encoded URL
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uniqueId = `file-input-${Math.random().toString(36).substr(2, 9)}`;

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      previewFile(file);
    } else {
      onRemove("No file selected");
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const result = reader.result as string;
      setBase64Url(result); // Save the base64 encoded URL to state
      onSelect(result);
    };
    reader.onerror = () => {
      console.error("Error: Unable to preview file.");
      onRemove("Unable to preview file");
    };
  };

  return (
    <>
      <label className="text-sm font-medium text-gray-700" htmlFor={uniqueId}>
        Upload an Image
      </label>
      <input // Changed to standard input to directly use the ref
        ref={fileInputRef}
        id={uniqueId}
        type="file" // Corrected type
        accept="image/*"
        name="image"
        onChange={handleFileInputChange}
        className="hidden-input"
        style={{ display: "none" }} // Ensure this is hidden
      />
      {/* Optional: Display the image preview */}
      {base64Url && (
        <img
          src={base64Url}
          alt="Preview"
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
      )}
    </>
  );
};

export default Upload;
