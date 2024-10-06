"use client"; // Ensure this is at the top for Next.js client components
import React, { lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

const Icon = ({ name, ...props }) => {
  // Check if the icon name exists in dynamicIconImports
  if (!(name in dynamicIconImports)) {
    console.warn(`Icon "${name}" not found in dynamic imports.`);
    return <div style={{ background: "#ddd", width: 24, height: 24 }} />;
  }

  // Use a function to return the import promise
  const LucideIcon = lazy(() => dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} /> {/* Forward all props to the icon */}
    </Suspense>
  );
};

export default Icon;
