"use client";
import React from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function TimeConfigurator({ setStartTime, setEndTime }) {
  const handleStartTimeChange = (event) => {
    const newStartTime = event.target.value;
    setStartTime(newStartTime);
  };

  const handleEndTimeChange = (event) => {
    const newEndTime = event.target.value;
    setEndTime(newEndTime);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardDescription>Select Time Range</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="startTime">Start Time</Label>
            <input
              aria-label="Choose time"
              className="w-full border-[1px] rounded-lg border-[#e2e8f0] p-2 outline-none"
              id="startTime"
              type="time"
              onChange={handleStartTimeChange}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="endTime">End Time</Label>
            <input
              aria-label="Choose time"
              className="w-full border-[1px] rounded-lg border-[#e2e8f0] p-2 outline-none"
              id="endTime"
              type="time"
              onChange={handleEndTimeChange}
            />
          </div>
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button className="w-full" onClick={handleSaveTime}>
          Save Time
        </Button>
      </CardFooter> */}
    </Card>
  );
}
