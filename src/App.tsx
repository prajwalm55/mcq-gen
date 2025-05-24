// import { Button } from "@/components/ui/button"

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-svh">
//       <Button>Click me</Button>
//     </div>
//   )
// }

// export default App


import { useState } from "react";
 import { Button } from "@/components/ui/button"
import { ProgressBar } from "./components/ProgressBar";
import { TranscriptDisplay } from "./components/TranscriptDisplay";
import { UploadForm } from "./components/UploadForm";

type TranscriptSegment = {
  start: string;
  end: string;
  text: string;
  questions: string[];
};

function App() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Idle");
  const [transcript, setTranscript] = useState<TranscriptSegment[]>([]);

  const handleDummyData = () => {
    setProgress(30);
    setStatus("Uploading...");

    setTimeout(() => {
      setProgress(70);
      setStatus("Processing...");

      const dummy: TranscriptSegment[] = [
        {
          start: "00:00",
          end: "05:00",
          text: "Welcome to the lecture. Today we discuss AI.",
          questions: ["What is the topic?", "What does AI stand for?"]
        },
        {
          start: "05:00",
          end: "10:00",
          text: "This part focuses on machine learning techniques.",
          questions: ["What technique is discussed?", "Is ML part of AI?"]
        }
      ];

      setTimeout(() => {
        setTranscript(dummy);
        setProgress(100);
        setStatus("Done");
      }, 1000);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
      <UploadForm onDummyUpload={handleDummyData} />
      <ProgressBar progress={progress} status={status} />
      {transcript.length > 0 && <TranscriptDisplay data={transcript} />}
    </div>
  );
}

export default App;
