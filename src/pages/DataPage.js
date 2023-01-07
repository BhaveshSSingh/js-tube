import React from "react";

const DataPage = ({ pageName, noOfVideos, videos }) => {
  return (
    <div>
      <div className="flex">
        {pageName},{noOfVideos}
        <div>
          <button className="border border-blue-400">Clear Data</button>
        </div>
      </div>
      <div>{videos}</div>
    </div>
  );
};

export default DataPage;
