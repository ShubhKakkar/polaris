"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import GraphSelect from '@/components/commons/GraphSelect';
import DateConfigurator from '@/components/commons/DateConfigurator';
import TimeConfigure from '@/components/commons/TimeConfigure';
import { Button } from '@/components/ui/button';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import ChartElement from '@/components/commons/ChartElement';

const Dashboard = () => {

  const [csvFile, setCSVFile] = useState(null);
  const [graphType, selectGraphType] = useState("line-graph");
  const [startDate, setStartDate] = useState("21-11-2023");
  const [endDate, setEndDate] = useState("21-11-2023");
  const [startTime, setStartTime] = useState("14:00:00");
  const [endTime, setEndTime] = useState("18:00:00");
  const [chartData, setChartData] = useState(null);
  const { toast } = useToast();

  const handleChartCreation = () => {
    console.log(startDate, startTime, endDate, endTime, csvFile, graphType);
    const showErrorToast = (description) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    };

    // if (!csvFile || csvFile.type !== "text/csv") {
    //   showErrorToast("File type needs to be csv.");
    // } else if (!graphType) {
    //   showErrorToast("Please select graph type.");
    // } else if (!startDate) {
    //   showErrorToast("Please select start date.");
    // } else if (!endDate) {
    //   showErrorToast("Please select end date.");
    // } else if (!startTime) {
    //   showErrorToast("Please select start time.");
    // } else if (!endTime) {
    //   showErrorToast("Please select end time.");
    // }
    // else {
    //   const data = {
    //     csvFile: csvFile,
    //     graphType: graphType,
    //     startDate: startDate,
    //     endDate: endDate,
    //     startTime: startTime,
    //     endTime: endTime,
    //   }
    //   console.log(data);
    //   setChartData(data);
    // }
    const data = {
      csvFile: csvFile,
      graphType: graphType,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
    }
    setChartData(data);
  };


  return (
    <div>
      <div className="flex h-full">
        <div className="h-[calc(100vh-70px)] w-3/4 p-5 grid place-items-center">
          <ChartElement chartData={chartData} />
        </div>
        <div className="h-[calc(100vh-70px)] w-1/4 p-5 flex flex-col gap-4">
          <GraphSelect graphType={graphType} selectGraphType={selectGraphType} />
          <DateConfigurator setStartDate={setStartDate} setEndDate={setEndDate} />
          <TimeConfigure setStartTime={setStartTime} setEndTime={setEndTime} />
          <Button className="w-full" onClick={handleChartCreation}>Create Graph</Button>
        </div>
      </div>
      <div className="h-[70px] p-2 flex flex-col border-t">
        <Input type="file" className="h-full border inline cursor-pointer" setCSVFile={setCSVFile} />
      </div>
    </div>
  )
}

export default Dashboard