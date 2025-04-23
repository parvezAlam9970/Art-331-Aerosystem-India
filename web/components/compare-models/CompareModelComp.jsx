"use client";

import React, { useState } from "react";
import CompareModelsFilter from "./CompareModelsFilter";
import FilterModelsCards from "../ReUseComp/FilterModelsCards";
import ButtonWrapper from "../custom/ButtonWrapper";

const CompareModelComp = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="my-5 md:my-10 lg:my-16">
      {/* Filter for mobile - dropdown */}
      <div className="lg:hidden mb-5">
        <ButtonWrapper
          onClick={() => setShowFilter(!showFilter)}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </ButtonWrapper>
        {showFilter && (
          <div className="mt-4 p-5 bg-mgrey rounded shadow">
            <CompareModelsFilter />
          </div>
        )}
      </div>

      {/* Main layout for lg and up */}
      <div className="grid lg:grid-cols-4 gap-5 xl:gap-10">
        <div className="hidden lg:block col-span-1 p-3 xl:p-5 bg-mgrey rounded max-h-[600px]">
          <CompareModelsFilter />
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xl font-medium">
            Displaying 3 out of 6 Aircraft
          </h4>
          <div className="my-5 grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {Array(5)
              .fill()
              .map((_, index) => (
                <FilterModelsCards key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareModelComp;
