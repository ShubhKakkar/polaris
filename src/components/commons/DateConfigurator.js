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


const DateConfigurator = ({ setStartDate, setEndDate }) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    {/* <CardTitle className="text-3xl">Graph type</CardTitle> */}
                    <CardDescription>Select Date Range</CardDescription>
                </CardHeader>
                <CardContent>
                    <DatePickerWithRange setStartDate={setStartDate} setEndDate={setEndDate} />
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>
        </div>
    )
}

export default DateConfigurator