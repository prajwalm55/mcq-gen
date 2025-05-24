// type ProgressBarProps = {
//     progress: number;
//     status: string;
//   };
  
//   export const ProgressBar = ({ progress, status }: ProgressBarProps) => (
//     <div className="p-4">
//       <p>Status: {status}</p>
//       <div className="w-full bg-gray-200 rounded-full h-4">
//         <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }} />
//       </div>
//     </div>
//   );
  

type Props = {
  progress: number;
  status: string;
};

export const ProgressBar = ({ progress, status }: Props) => (
  <div className="w-full max-w-xl">
    <p className="mb-2 text-sm text-center">{status}</p>
    <div className="w-full bg-gray-300 h-3 rounded">
      <div
        className="bg-blue-600 h-3 rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);
