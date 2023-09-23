import React from "react";

const NotFound: React.FC<{}> = () => {
  return (
    <div className="flex flex-col items-center justify-center calc(h-full - 10rem) min-h-[90vh]">
      <img
        src="/images/undraw_page_not_found_re_e9o6.svg"
        className="h-[20rem] w-[20rem]"
      />
      <h1 className="text-sm font-medium">Page not found </h1>
    </div>
  );
};

export default NotFound;
