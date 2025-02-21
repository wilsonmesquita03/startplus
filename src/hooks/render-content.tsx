/* eslint-disable @typescript-eslint/no-explicit-any */
export const renderContent = (content: any) => {
  return content?.map((item: any) => {
    switch (item.type) {
      case "heading":
        const HeadingTag: React.ElementType = `h${item.props.level as "1" | "2" | "3"}`;
        return (
          <HeadingTag key={item.id} className="text-xl font-bold">
            {renderContent(item.content)}
          </HeadingTag>
        );
      case "paragraph":
        return (
          <p key={item.id} className="mb-4 text-gray-700">
            {renderContent(item.content)}
          </p>
        );
      case "numberedListItem":
        return (
          <li key={item.id} className="text-gray-600">
            {renderContent(item.content)}
          </li>
        );
      case "bulletListItem":
        return (
          <li key={item.id} className="text-gray-600">
            {renderContent(item.content)}
          </li>
        );
      case "checkListItem":
        return (
          <li key={item.id} className="text-gray-600">
            <input type="checkbox" checked={item.props.checked} disabled /> {renderContent(item.content)}
          </li>
        );
      case "codeBlock":
        return (
          <pre key={item.id} className="bg-gray-900 text-white p-4 rounded-lg">
            {renderContent(item.content)}
          </pre>
        );
      case "table":
        return (
          <table key={item.id} className="table-auto w-full mb-4">
            <thead>
              <tr>
                {item.content.rows[0].cells.map((cell: any, index: number) => (
                  <th key={index} className="px-4 py-2 border">{renderContent(cell)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.content.rows.slice(1).map((row: any, rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell: any, cellIndex: number) => (
                    <td key={cellIndex} className="px-4 py-2 border">{renderContent(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "image":
        return (
          <img
            key={item.id}
            src={item.props.url}
            alt={item.props.caption}
            className="mb-4 max-w-full"
          />
        );
      case "video":
        return (
          <video key={item.id} controls className="mb-4 max-w-full">
            <source src={item.props.url} type="video/mp4" />
          </video>
        );
      case "audio":
        return (
          <audio key={item.id} controls className="mb-4">
            <source src={item.props.url} type="audio/mp3" />
          </audio>
        );
      case "file":
        return (
          <a key={item.id} href={item.props.url} className="text-blue-600" download>
            {item.props.caption || "Download"}
          </a>
        );
      default:
        return null;
    }
  });
};