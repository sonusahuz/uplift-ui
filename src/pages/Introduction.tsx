import NextPrevButton from '../ui/NextPrevButton';

const Introduction = () => {
  return (
    <div className="p-4 ">
      <h1 className="mb-2 text-3xl font-bold">Introduction</h1>

      <section className="mb-8">
        <p className="mb-4 text-lg">
          Uplift-UI is a versatile React component library that simplifies the
          development of modern web applications. It provides pre-built UI
          components that are customizable and easy to use. The library is built
          using React,TypeScript, and TailwindCSS, making it highly flexible for
          building responsive and visually appealing interfaces.
        </p>
      </section>
      <div>
        <h2 className="mb-2 text-3xl font-bold">Features</h2>
        <ul className="text-lg">
          <li>Pre-built, customizable components</li>
          <li>
            Typescript support for better type-checking and code maintainability
          </li>
          <li>Uses TailwindCSS for styling flexibility</li>
          <li>Modular and easy to integrate into any React project</li>
        </ul>
      </div>
      <div className="my-8">
        <NextPrevButton
          next="Installation"
          prev="Home"
          nextPath="installation"
          prevPath=""
        />
      </div>
    </div>
  );
};

export default Introduction;
