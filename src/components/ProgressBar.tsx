interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
}
