import NextPrevButton from '../ui/NextPrevButton';
import { Progress } from 'uplift-ui';
const progressStates = [
  {
    id: 1,
    title: 'Progress 25%',
    value: 25,
    max: 100,
  },
  {
    id: 2,
    title: 'Progress 50%',
    value: 50,
    max: 100,
  },
  {
    id: 3,
    title: 'Progress 75%',
    value: 75,
    max: 100,
  },
  {
    id: 4,
    title: 'Progress 100%',
    value: 100,
    max: 100,
  },
];

const sizes = [
  { id: 1, title: 'Small', size: 'small' as const },
  { id: 2, title: 'Medium', size: 'medium' as const },
  { id: 3, title: 'Large', size: 'large' as const },
];

const colors = [
  { id: 1, title: 'Primary', color: 'primary' as const },
  { id: 2, title: 'Secondary', color: 'secondary' as const },
  { id: 3, title: 'Success', color: 'success' as const },
  { id: 4, title: 'Error', color: 'error' as const },
  { id: 5, title: 'Warning', color: 'warning' as const },
  { id: 6, title: 'Info', color: 'info' as const },
];

const ProgressDemo = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold">Progress</h1>

      {/* Component Description */}
      <section className="mb-8">
        <p className="mb-4 text-lg">
          The <strong>Progress</strong> component indicates the completion
          status of a task.
        </p>
      </section>

      {/* Demo of Progress States */}
      <section className="mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">States</h2>
        {progressStates.map((item) => (
          <div className="mb-4" key={item.id}>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center p-6 mx-auto border rounded">
              <Progress value={item.value} max={item.max} />
            </div>
          </div>
        ))}
      </section>

      {/* Demo of Progress Sizes */}
      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>
        {sizes.map((item) => (
          <div className="mb-4" key={item.id}>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center p-6 mx-auto border rounded">
              <Progress value={50} max={100} size={item.size} />
            </div>
          </div>
        ))}
      </section>

      {/* Demo of Progress Colors */}
      <section className="mt-10 mb-8 space-y-6">
        <h2 className="mb-4 text-2xl font-semibold">Colors</h2>
        {colors.map((item) => (
          <div className="mb-4" key={item.id}>
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            <div className="flex items-center p-6 mx-auto border rounded">
              <Progress value={50} max={100} color={item.color} />
            </div>
          </div>
        ))}
      </section>

      {/* Props Table */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Prop</th>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">value</td>
                <td className="px-4 py-2 border">number</td>
                <td className="px-4 py-2 border">Current progress value.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">max</td>
                <td className="px-4 py-2 border">number</td>
                <td className="px-4 py-2 border">Maximum progress value.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">size</td>
                <td className="px-4 py-2 border">
                  'small' | 'medium' | 'large'
                </td>
                <td className="px-4 py-2 border">
                  Specifies the size of the progress bar.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">color</td>
                <td className="px-4 py-2 border">
                  'primary' | 'secondary' | 'success' | 'error' | 'warning' |
                  'info'
                </td>
                <td className="px-4 py-2 border">
                  Defines the color variant of the progress bar.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Next and Previous Button Navigation */}
      <div>
        <NextPrevButton
          next="Label"
          prev="Checkbox"
          nextPath="label"
          prevPath="checkbox"
        />
      </div>
    </div>
  );
};

export default ProgressDemo;
