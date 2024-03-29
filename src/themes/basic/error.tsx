"use client";

import { useEffect } from "react";

import "../../common.css";
import AddDetailsForm from "../../components/add-details-form";
import { Button } from "../../components/ui/button";
import { ErrorPageProps } from "../../types";

import { saveBugReport } from "@/lib/bugpilot-integration";

export default function Component({
  // NOTE: We have seen inconsistent behavior with the reset function in next 14.1.0+ so we are
  // commenting it out for now. Using window.location.reload() instead.
  // reset,
  onAddDetailsClick,
  reportErrorFn,
  error,
}: ErrorPageProps) {
  useEffect(() => {
    reportErrorFn?.(error); // send the js error to bugpilot
    saveBugReport?.(); // save the session recording
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Oops! Something went wrong.
      </h1>

      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        We're sorry for the inconvenience. Please try refreshing the page, or
        provide additional details if the problem persists.
      </p>

      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button variant="default" onClick={() => window.location.reload()}>
          Try again
        </Button>

        <AddDetailsForm onAddDetailsClick={onAddDetailsClick} />
      </div>
    </section>
  );
}
