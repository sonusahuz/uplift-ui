
interface ProgressProps {
  value: number; // Current value of the progress
  max: number; // Maximum value of the progress
  size?: 'small' | 'medium' | 'large'; // Size of the progress bar
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'; // Color of the progress bar
}

const Progress = ({
  value,
  max,
  size = 'medium',
  color = 'primary',
}: ProgressProps) => {
  // Calculate the percentage of progress
  const percentage = Math.min((value / max) * 100, 100); // Clamp to a maximum of 100

  const sizeClasses = {
    small: 'h-2',
    medium: 'h-4',
    large: 'h-6',
  };

  const colorClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
    info: 'bg-teal-600',
  };

  return (
    <div className="w-full overflow-hidden bg-gray-200 rounded">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} transition-all`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Progress;
