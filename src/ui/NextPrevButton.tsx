import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from 'uplift-ui';
import Button from '../components/Button/Button';

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
  return (
    <div className="flex items-center justify-between">
      <Link to={`/${prevPath}`}>
        <Button variant="outline" size="sm">
          <div className="flex items-center justify-between gap-2 p-1">
            <ChevronLeft size={18} />        
            <span className="text-[15px]">{prev}</span>
          </div>
        </Button>
      </Link>
      <Link to={`/${nextPath}`}>
        <Button variant="outline" size="sm">
          <div className="flex items-center justify-between gap-2 p-1">
            <span className="text-[15px]">{next}</span>
            <ChevronRight size={18} />        
          </div>
        </Button>
      </Link>
    </div>
    
  );
};

export default NextPrevButton;
