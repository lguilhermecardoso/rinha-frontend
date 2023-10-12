
interface JsonTreeViewProps {
  json: string
}

export function JsonTreeView({
  json
}: JsonTreeViewProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  function formatJsonToTreeView(json: any, indent: number = 0, isLast: boolean = true): JSX.Element {
    console.log(isLast)
    const indentString = ' '.repeat(indent * 2);
    if (Array.isArray(json)) {
      return (
        <ul className="pl-4 parent">
          {json.map((item, index) => (
            <div>
              <li key={index}>
                <span className="text-[#BFBFBF]">{indentString}{index}: </span>
                {formatJsonToTreeView(item, indent + 1, index === json.length - 1)}
              </li>
            </div>
          ))}
        </ul>
      );
    } else if (typeof json === 'object' && json !== null) {
      return (
        <ul className="pl-4">
          {Object.entries(json).map(([key, value], index, array) => (
            <li key={key}>
              <span className="text-[#4E9590]">{indentString}{key}: </span>
              {formatJsonToTreeView(value, indent + 1, index === array.length - 1)}
            </li>
          ))}
        </ul>
      );
    } else if (typeof json === 'string') {
      return <span className="text-gray-950">"{json}"</span>;
    } else if (typeof json === 'boolean') {
      return <span className="text-gray-950">{json ? 'true' : 'false'}</span>;
    } else if (json === null) {
      return <span className="text-gray-950">null</span>;
    } else {
      return <span className="text-gray-950">{json}</span>;
    }
  }

  const treeView = formatJsonToTreeView(JSON.parse(json));

  return (
    <div className="bg-white rounded-md p-4">
      {treeView}
    </div>
  );
}