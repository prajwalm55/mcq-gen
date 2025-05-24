import { useState } from "react";
import { UploadForm } from "../components/UploadForm";
import { TranscriptDisplay } from "../components/TranscriptDisplay";
import { ProgressBar } from "../components/ProgressBar";
import type { TranscriptSegment } from "../types";

export const Home = () => {
  const [transcript, setTranscript] = useState<TranscriptSegment[]>([]);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Idle");

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <UploadForm
        onUploadStart={() => {
          setProgress(30);
          setStatus("Uploading...");
        }}
        // onUploadSuccess={async () => {
        //   setProgress(70);
        //   setStatus("Fetching Transcript...");

        //   // Simulate fetch from API
        //   const response = await fetch("http://localhost:5000/api/transcript");
        //   const data = await response.json();
        //   setTranscript(data);
        //   setProgress(100);
        //   setStatus("Done");
        // }}
        onUploadSuccess={async () => {
            setProgress(70);
            setStatus("Fetching Transcript...");
          
            // ✅ Dummy data here
            const dummyData: TranscriptSegment[] = [
              {
                start: "00:00",
                end: "05:00",
                text: "This is a dummy transcript segment for testing purposes.",
                questions: [
                  "What is the main idea of the lecture?",
                  "Which topic is discussed in this segment?"
                ]
              },
              {
                start: "05:00",
                end: "10:00",
                text: "This is the second dummy segment with more content.",
                questions: [
                  "What example is provided in this part?",
                  "What terminology is introduced?"
                ]
              }
            ];
          
            setTranscript(dummyData);
            setProgress(100);
            setStatus("Done");
          }}
          
      />
      <ProgressBar progress={progress} status={status} />
      {transcript.length > 0 && <TranscriptDisplay data={transcript} />}
    </div>
  );
};
