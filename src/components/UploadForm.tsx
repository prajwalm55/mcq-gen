// import { useState } from "react";
// import axios from "axios";
// // import { Button } from "@shadcn/ui/button";
// import { Button } from "@/components/ui/button";


// export const UploadForm = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleUpload = async () => {
//     if (!file) return;
//     const formData = new FormData();
//     formData.append("video", file);

//     await axios.post("http://localhost:5000/api/upload", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="file"
//         accept="video/mp4"
//         onChange={(e) => setFile(e.target.files?.[0] || null)}
//       />
//       <Button onClick={handleUpload} className="ml-2">Upload</Button>
//     </div>
//   );
// };


// src/components/UploadForm.tsx

// import { useState } from "react";
// import axios from "axios";
//  import { Button } from "@/components/ui/button";

// type UploadFormProps = {
//   onUploadStart: () => void;
//   onUploadSuccess: () => void;
// };

// export const UploadForm = ({ onUploadStart, onUploadSuccess }: UploadFormProps) => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleUpload = async () => {
//     if (!file) return;

//     onUploadStart();

//     const formData = new FormData();
//     formData.append("video", file);

//     try {
//       await axios.post("http://localhost:5000/api/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       onUploadSuccess();
//     } catch (err) {
//       console.error("Upload failed", err);
//       alert("Upload failed");
//     }
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="file"
//         accept="video/mp4"
//         onChange={(e) => setFile(e.target.files?.[0] || null)}
//       />
//       <Button onClick={handleUpload} className="ml-2">
//         Upload
//       </Button>
//     </div>
//   );
// };


// import { Button } from "@/components/ui/button";

// type Props = {
//   onDummyUpload: () => void;
// };

// export const UploadForm = ({ onDummyUpload }: Props) => (
//   <div className="space-y-2 text-center">
//     <input type="file" accept="video/mp4" />
//     <Button onClick={onDummyUpload}>Simulate Upload</Button>
//   </div>
// );
 import { Button } from "@/components/ui/button";

type Props = {
  onDummyUpload: () => void;
};

export const UploadForm = ({ onDummyUpload }: Props) => (
  <div className="space-y-2 text-center">
    <input type="file" accept="video/mp4" />
    <Button onClick={onDummyUpload}>Simulate Upload</Button>
  </div>
);
