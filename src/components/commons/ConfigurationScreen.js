import React from 'react';

const ConfigurationScreen = ({ graphType, setGraphType, alertWidgetEnabled, setAlertWidgetEnabled }) => {
  return (
    <div className="p-2">
  <div className="mb-4">
    <label htmlFor="graphType" className="block text-sm font-medium text-gray-700 mb-1">Select Graph Type</label>
    <select id="graphType" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" value={graphType} onChange={(e) => setGraphType(e.target.value)}>
      <option value="line">Line Graph</option>
      <option value="bar">Stacked Bar Graph</option>
    </select>
  </div>
  {/* <div className="flex items-center">
    <input id="alertWidgetEnabled" className="mr-2 rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" type="checkbox" checked={alertWidgetEnabled} onChange={(e) => setAlertWidgetEnabled(e.target.checked)} />
    <label htmlFor="alertWidgetEnabled" className="text-sm font-medium text-gray-700">Enable Alert Widget</label>
  </div> */}
</div>

  );
};

export default ConfigurationScreen;
