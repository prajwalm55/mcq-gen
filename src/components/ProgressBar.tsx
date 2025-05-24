type ProgressBarProps = {
    progress: number;
    status: string;
  };
  
  export const ProgressBar = ({ progress, status }: ProgressBarProps) => (
    <div className="p-4">
      <p>Status: {status}</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
  