import './Marquee.css'; // Import CSS for styling

type MarqueeProps = {
  direction?: 'left' | 'right';
  children: React.ReactNode;
  speed?: number; // Optional speed, in seconds
};

const Marquee: React.FC<MarqueeProps> = ({
  direction = 'left',
  speed = 10,
  children,
}) => {
  return (
    <div className={`marquee-container ${direction}`}>
      <div className="marquee" style={{ animationDuration: `${speed}s` }}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;
