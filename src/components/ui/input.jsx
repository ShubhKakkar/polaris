import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, setCSVFile, ...props }, ref) => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type === "text/csv") {
      console.log("Selected CSV file:", selectedFile);
      setCSVFile(selectedFile);
    } else {
      console.error("Please select a valid CSV file.");
    }
  };
  return (
    (<input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
      accept=".csv"
      onChange={handleFileChange}
    />
    )
  );
})
Input.displayName = "Input"

export { Input }
