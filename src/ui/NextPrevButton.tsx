import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NextPrevButton = ({
  next,
  prev,
  prevPath,
  nextPath,
}: {
  next: string;
  prev: string;
  prevPath: string;
  nextPath: string;
}) => {
  const handleLink = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="flex items-center justify-between">
      <Link to={prevPath} onClick={handleLink}>
        <button className="border border-[#666] font-medium h-10 rounded-md px-2 py-2">
          <div className="flex items-center justify-between gap-1">
            <ChevronLeft size={18} />
            <span className="text-[15px]">{prev}</span>
          </div>
        </button>
      </Link>
      <Link to={nextPath} onClick={handleLink}>
        <button className="border border-[#666] font-medium h-10 rounded-md px-2 py-2">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[15px]">{next}</span>
            <ChevronRight size={18} />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default NextPrevButton;
