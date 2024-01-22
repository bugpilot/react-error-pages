/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mD49VcLNtFz
 */
import AddDetailsForm from "../../components/add-details-form";
import { Button } from "../../components/ui/button";
import { ErrorPageProps } from "../../types";
import "../../common.css";

import image from "./image.webp";

export default function Component({
  reset,
  onAddDetailsClick,
}: ErrorPageProps) {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-16 gap-6 max-w-screen-xl">
      <div className="mt-10 lg:mt-0">
        <img
          alt=""
          className="w-[200px] aspect-square object-cover"
          src={image}
        />
      </div>

      <div className="text-center w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Oh no!
        </h1>

        <p className="mt-2 text-base text-gray-500 max-w-md">
          This page is having some technical problems. We have been informed
          about the problem and we're working to get things back to normal
          quickly.
        </p>

        <div className="flex flex-row gap-2 items-center mt-6">
          <Button variant="secondary" onClick={() => reset()}>
            Try again
          </Button>
          <AddDetailsForm onAddDetailsClick={onAddDetailsClick} />
        </div>
      </div>
    </div>
  );
}
