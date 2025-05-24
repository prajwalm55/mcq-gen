import type { TranscriptSegment } from "../types";

type Props = {
  data: TranscriptSegment[];
};

export const TranscriptDisplay = ({ data }: Props) => (
  <div className="space-y-4 p-4">
    {data.map((segment, index) => (
      <div key={index} className="border rounded-xl p-4 shadow">
        <h4 className="font-bold">Segment {index + 1}</h4>
        <p className="text-sm mt-2">{segment.text}</p>
        <ul className="mt-2 list-disc list-inside">
          {segment.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
