/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FIyKVcOC9hw
 */

import "../../common.css";
import AddDetailsForm from "../../components/add-details-form";
import { Button } from "../../components/ui/button";
import { ErrorPageProps } from "../../types";

export default function Component({ onAddDetailsClick }: ErrorPageProps) {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Oops! Something went wrong.
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        We're sorry for the inconvenience. Please try refreshing the page, or
        provide additional details if the problem persists.
      </p>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button variant="default" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>

        {onAddDetailsClick !== null ? (
          <AddDetailsForm onAddDetailsClick={onAddDetailsClick} />
        ) : null}
      </div>
    </section>
  );
}
