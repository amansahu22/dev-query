"use client";

import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

const HomeFilters = () => {
  const isActive = false;
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${isActive ? "bg-primary-100 text-primary-500" : "bg-light-800 text-light-500 dark:bg-dark-300 dark:text-light-500"}`}
          onClick={() => {}}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
