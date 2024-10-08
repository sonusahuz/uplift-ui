import { Link } from 'react-router-dom';
// import { Button } from 'uplift-ui';
import Button from '../components/Button/Button';

export default function LandingPage() {
  return (
    <div className="flex flex-col ">
      <main className="flex-1 mt-24 md:mt-0">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="md:w-[75%] space-y-4">
                <h1 className="text-4xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-7xl/none">
                  Transform your UI effortlessly with Uplift UI.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 text-lg">
                  A React-based library that simplifies building responsive,
                  modern, and accessible user interfaces.
                </p>
              </div>
              <div className="space-x-4">
                <Link to={'/installation'}>
                  <Button>Get Started</Button>
                </Link>
                <Link to={'/accordion'}>
                  <Button variant="outline">Browse Components</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
