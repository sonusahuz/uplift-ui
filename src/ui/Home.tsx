import { Link } from 'react-router-dom';
import { Button } from '../components';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 mt-24 md:mt-0">
        <section className="w-full md:py-24 lg:py-32 xl:py-36">
          <div className="px-4">
            <div className="flex flex-col items-center space-y-4 lg:text-center">
              <div className="md:w-[75%] space-y-4">
                <h1 className="text-4xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-7xl/none">
                  Transform your UI effortlessly with Uplift UI.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 text-lg">
                  A React-based library that simplifies building responsive,
                  modern, and accessible user interfaces.
                </p>
              </div>
              <div className="space-x-7">
                <Link to={'/docs/installation'}>
                  <Button className='h-10 px-3 text-sm font-medium text-white bg-black rounded'>Get Started</Button>
                </Link>
                <Link to={'/docs/accordion'}>
                  <button className="border border-[#666] font-medium h-10 rounded-md px-2 lg:px-4 py-2">
                    Browse Components
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex flex-wrap items-center justify-center px-6 py-9">
        <p className="text-sm">
          Built by{' '}
          <Link to={'https://sonusahu.vercel.app'} className="underline ">
            Sonu Sahu
          </Link>
          . The source code is available on{' '}
          <Link
            to={'https://github.com/sonusahuz/uplift-ui'}
            className="underline"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
