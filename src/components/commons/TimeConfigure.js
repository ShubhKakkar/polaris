"use client";
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DatePickerWithRange } from './DateRangePicker';
import { TimeConfigurator } from '../time-configurator';


const TimeConfigure = ({ setStartTime, setEndTime }) => {
    return (
        <div>
            <TimeConfigurator setStartTime={setStartTime} setEndTime={setEndTime} />
        </div>
    )
}

export default TimeConfigure