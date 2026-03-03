import React from "react";

const ContentLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4 space-x-6">
      {payload?.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center space-x-2">
          <div
            style={{ backgroundColor: entry.color }}
            className="w-2.5 h-2.5 rounded-full"
          ></div>
          <span className="text-xs text-gray-700 font-medium">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ContentLegend;
