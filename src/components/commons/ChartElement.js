"use client";

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

const ChartElement = ({ chartData }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState({
    labels: [],
    datasets: [],
  }); // Initialize with an empty array

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Metering',
      },
    },
    responsive: true,
    scales: {
      x: {
        type: 'category',
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement
  );

  useEffect(() => {
    if (chartData?.csvFile) {
      Papa.parse(chartData?.csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        delimiter: '',
        complete: (result) => {
          const filteredData = result.data.filter((entry) => {
            const entryTimestamp = new Date(entry.Timestamp);
            return entryTimestamp >= chartData?.startDate && entryTimestamp <= chartData?.endDate;
          });

          const labels = filteredData.map((entry) => entry.Timestamp);

          const keys = Object.keys(filteredData[0] || {}).filter(
            (key) => key !== 'Timestamp'
          );

          const datasets = keys.map((key) => ({
            label: key,
            data: filteredData.map((entry) => entry[key]),
            borderWidth: 1,
          }));

          const transformedData = {
            labels,
            datasets,
          };

          console.log("afsd", transformedData);

          setFilteredData(transformedData);
        },
      });
    }
  }, [chartData?.csvFile, chartData?.startDate, chartData?.endDate]);

  return (
    <div>
      {filteredData.labels.length > 0 ? (
        (chartData.graphType === 'line-graph' ? (
          <div className="h-[600px] w-[1000px] grid place-items-center">
            <Line options={options} data={filteredData} />
          </div>
        ) : (
          <div className="h-[600px] w-[1000px] grid place-items-center">
            <Bar options={options} data={filteredData} />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ChartElement;
