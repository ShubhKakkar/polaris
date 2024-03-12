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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const GraphSelect = ({ graphType, selectGraphType }) => {
    return (
        <div>
            <Card>
                <CardHeader>
                    {/* <CardTitle className="text-3xl">Graph type</CardTitle> */}
                    <CardDescription>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>Configure graph type</TooltipTrigger>
                                <TooltipContent>
                                    <p className="text-base">Select the type of graph you want to generate</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Select onValueChange={(selectedValue) => { selectGraphType(selectedValue) }} >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Graph" value={graphType} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="line-graph">Line Graph</SelectItem>
                            <SelectItem value="bar-graph">Bar Graph</SelectItem>
                        </SelectContent>
                    </Select>
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>
        </div>
    )
}

export default GraphSelect