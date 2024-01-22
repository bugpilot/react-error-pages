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
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-950 p-4 text-center">
      <h1 className="text-6xl font-bold text-zinc-50">Whoops!</h1>
      <p className="mt-2 text-xl text-zinc-50">Something went wrong</p>
      <div className="mt-10">
        {/* <img
          alt="Error illustration"
          className="mx-auto"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "500/200",
            objectFit: "cover",
          }}
          width="500"
        /> */}
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button variant="default" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>

        <AddDetailsForm onAddDetailsClick={onAddDetailsClick} />
      </div>
    </div>
  );
}
