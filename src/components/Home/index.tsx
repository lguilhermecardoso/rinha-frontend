export function HomeComponent() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="m-auto w-[100%] items-center flex flex-col">
        <h1 className="text-5xl font-bold">
          JSON Tree Viewer
        </h1>
        <h2 className="mt-6">Simple JSON Viewer that runs completely on-client. No data exchange </h2>

        <button className="border border-solid border-black bg-gradient-to-b from-gray-300 to-gray-100 opacity-70 rounded-5 px-[12px] py-[6px] hover:opacity-20 transition mt-6">
          Load JSON
        </button>
      </div>
    </div>
  )
}