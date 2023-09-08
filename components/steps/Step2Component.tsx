import tableData from "./consts";

interface Step2ComponentProps {
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const Step2Component = ({
  onNextStep,
  onPreviousStep,
}: Step2ComponentProps) => {
  return (
    <div className="container mx-auto p-6">
      {" "}
      <div className="overflow-y-auto max-h-[500px]">
        <table className="  min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rent
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Width
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Length
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Market Rent
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.ID}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.Type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.Rent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.Width}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.Length}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.MarketRent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {item.Status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          onClick={() => onPreviousStep()}
          className="  bg-teal-800 hover:bg-teal-900 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={() => onNextStep()}
          className="bg-teal-800 hover:bg-teal-900 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step2Component;
