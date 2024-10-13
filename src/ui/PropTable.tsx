import React from 'react';

interface PropsTableRow {
  prop: string;
  type: string;
  description: string;
}

interface PropsTableProps {
  data: PropsTableRow[];
}

const PropsTable: React.FC<PropsTableProps> = ({ data }) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Props</h2>
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
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{row.prop}</td>
                <td className="px-4 py-2 border">{row.type}</td>
                <td className="px-4 py-2 border">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropsTable;
