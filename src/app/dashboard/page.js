"use client";

import React, { useState, useEffect } from 'react';
import Chart from '../../components/commons/Chart';
import DataForm from '../../components/commons/DataForm';
import ConfigurationScreen from '../../components/commons/ConfigurationScreen';
import Papa from 'papaparse';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [file, setFile] = useState([]);
  const [graphType, setGraphType] = useState('line');
  const [alertWidgetEnabled, setAlertWidgetEnabled] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [leakageAlerts, setLeakageAlerts] = useState([]);
  const [alert, setSelectedAlert] = useState([]);

  useEffect(() => {
    if (filteredData.length === 0) {
      setLeakageAlerts([]);
      setAlerts([]);
    }
  }, [filteredData]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = function (event) {
        const csvData = Papa.parse(event.target.result, { header: true }).data;
        setData(csvData);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (startTime, endTime, selectedMeters) => {
        if (file.length === 0) {
      return;
    }
    setAlerts([]);
    setLeakageAlerts([]);
    if (data) {
      const filtered = data.filter(entry => entry.Timestamp > startTime && entry.Timestamp < endTime);
      setFilteredData(filtered);
      calculateAlerts(filtered);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const calculateAlerts = (data) => {
    const newAlerts = [];
    const newLeakageAlerts = [];

    data.forEach(entry => {
      // Sum the power values of M1, M2, M3, and M4
      const totalPowerMeters = parseInt(entry["M1 Power (Watts)"]) + parseInt(entry["M2 Power (Watts)"]) + parseInt(entry["M3 Power (Watts)"]) + parseInt(entry["M4 Power Watts"]);
      // Check if the total power exceeds 1000 Watts
      if (totalPowerMeters > 1000) {
        newAlerts.push({ type: 'Total Power Exceeded', message: 'Total power consumption exceeded 1000 Watts', timestamp: entry.Timestamp, value: totalPowerMeters });
      }

      const leakageCurrent = parseInt(entry['Cluster Meter Power (Watts)']) - (parseInt(entry['M1 Power (Watts)']) + parseInt(entry['M2 Power (Watts)']) + parseInt(entry['M3 Power (Watts)']) + parseInt(entry['M4 Power Watts']));

      if (leakageCurrent > 300) {
        newLeakageAlerts.push({ type: 'Leakage Current Exceeded', message: `Leakage current exceeded 300 Watts at : ${entry.Timestamp}`, value: leakageCurrent });
      }
    });

    setAlerts(newAlerts);
    setLeakageAlerts(newLeakageAlerts);
  };

  return (
    <div className="flex h-screen">
      <div className={`flex-1 h-full relative`}>
        <div className="h-[50vh]">
          <Chart data={filteredData} type={graphType} alerts={alert} />
        </div>
        {alertWidgetEnabled && (
          <div className="h-[20vh] absolute bottom-0 w-full bg-white rounded-md p-4 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Alerts</h2>
            <div className='alert-container'>
              <div className={alerts.length > 0 ? 'mt-4' : 'hidden'}>
                {alerts.map((alert, index) => (
                  <div key={index} className="bg-gray-100 rounded-md shadow-sm mb-2 p-2 cursor-pointer hover:bg-gray-200" onClick={() => setSelectedAlert([{ value: alert.value, message: alert.message }])}>
                    <span className="text-blue-500 font-semibold">{alert.type}</span>
                    <span className="text-gray-700 ml-2">{alert.message}</span>
                    <span className="text-gray-500 ml-2">{alert.timestamp}</span>
                  </div>
                ))}
              </div>
              <div className={leakageAlerts.length > 0 ? 'mt-4' : 'hidden'}>
                {leakageAlerts.map((alert, index) => (
                  <div key={index} className="bg-gray-100 rounded-md shadow-sm mb-2 p-2 cursor-pointer hover:bg-gray-200" onClick={() => setSelectedAlert([{ value: alert.value, message: alert.message }])}>
                    <span className="text-blue-500 font-semibold">{alert.type}</span>
                    <span className="text-gray-700 ml-2">{alert.message}</span>
                    <span className="text-gray-500 ml-2">{alert.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="p-4 shadow-lg w-96">
          <div className="mb-4">
            <ConfigurationScreen graphType={graphType} setGraphType={setGraphType} alertWidgetEnabled={alertWidgetEnabled} setAlertWidgetEnabled={setAlertWidgetEnabled} />
          </div>
          <div className="mb-4">
            <label htmlFor="fileInput" className="block text-sm font-medium text-gray-700">Upload CSV File</label>
            <input id="fileInput" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required type="file" onChange={handleFileChange} accept=".csv" />
          </div>
          <div className="mb-4">
            <DataForm className="data-form" onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
