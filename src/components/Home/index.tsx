import { useState } from "react"
import { JsonTreeView } from "../JsonTreeView";

export function HomeComponent() {
  const [hasError, setHasError] = useState(false)
  const [jsonString, setJsonString] = useState('')

  function handleLoadJSON() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const json = JSON.parse(event.target?.result as string);
            setJsonString(JSON.stringify(json, null, 2));
            setHasError(false);
          } catch (error) {
            setHasError(true);
          }
        };
        reader.readAsText(file);
        console.log(file)
      }
    };
    input.click();
  }
  return (
    <>
      {jsonString ? (
        <>
          <JsonTreeView json={jsonString} />
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-[100vh]">
            <div className="m-auto w-[100%] items-center flex flex-col">
              <h1 className="text-5xl font-bold">
                JSON Tree Viewer
              </h1>
              <h2 className="mt-6">Simple JSON Viewer that runs completely on-client. No data exchange </h2>

              <button onClick={handleLoadJSON} className="border rounded-md border-solid border-black bg-gradient-to-b from-gray-300 to-gray-100 opacity-70 rounded-5 px-[12px] py-[6px] hover:opacity-20 transition mt-6">
                Load JSON
              </button>
              {hasError && (
                <p className="mt-6 font-light text-base text-[#BF0E0E]">Invalid file. Please load a valid JSON file.</p>
              )}
            </div>
          </div>
        </>
      )}
      
    </>
    
  )
}