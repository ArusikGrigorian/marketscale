import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Table = ({ data }) => {
  let sectionTitles = data.map((singleData) => {
    const titles = [];
    Object.keys(singleData).forEach((key) => {
      titles.push(key);
    });
    return titles.flat();
  });

  sectionTitles = Array.from(new Set(sectionTitles.flat()));

  return (
    <div className="table-wrapper">
      <table className="content-table">
        <thead>
          <tr>
            {sectionTitles.map((title) => {
              return (
                <th key={title} className="content-table-head">
                  {title}
                  <i className="content-table-head-icon">
                    <FaAngleDown />
                  </i>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((singleData, i) => {
            return (
              <tr key={singleData[i] + `${i}`}>
                {sectionTitles.map((title, i) => {
                  return (
                    <td key={singleData[i] + title[i]} className="content-table-data">
                      {singleData[sectionTitles[i]] === "Approved" ||
                      singleData[sectionTitles[i]] === "Rejected" ? (
                        <span
                          className={
                            singleData[sectionTitles[i]] === "Approved"
                              ? "content-table-data-approved"
                              : "content-table-data-rejected"
                          }
                        >
                          {singleData[sectionTitles[i]]}
                        </span>
                      ) : (
                        singleData[sectionTitles[i]]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
