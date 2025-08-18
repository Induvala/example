import { Outlet } from "react-router-dom";
import classNameMerge from "../utils/classNameMerge";
import type { ReactNode } from "react";

const MainLayout = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <div
        className={classNameMerge(
          `font-pretendard flex h-fit w-full`,
          className
        )}
      >
        {/* main content area */}
       
          <div className="w-full">
            {children || <Outlet />}
          </div>
       
      </div>
    </>
  );
};

export default MainLayout;
