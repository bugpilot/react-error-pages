"use client";

import React, { useState } from "react";

import { updateBugReport } from "../lib/bugpilot-integration";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Textarea } from "./ui/textarea";

type AddDetailsFormProps = {
  onAddDetailsClick?: (...args: unknown[]) => void;
};

export default function AddDetailsForm({
  onAddDetailsClick,
}: AddDetailsFormProps) {
  const [details, setDetails] = useState<string>("");
  const [reported, setReported] = useState<boolean>(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!details) {
      return;
    }

    if (typeof onAddDetailsClick === "undefined") {
      updateBugReport({
        metadata: {
          userProvidedDescription: details,
          triggerType: "widget",
        },
      });

      setTimeout(() => {
        setReported(true);
      }, 300);
      return;
    }

    onAddDetailsClick();

    setTimeout(() => {
      setReported(true);
    }, 300);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Add Details</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <form
          className="flex flex-col items-start space-y-4"
          onSubmit={onSubmit}
        >
          <Label htmlFor="error-details">What happened?</Label>
          <Textarea
            className="min-h-[100px]"
            id="error-details"
            placeholder="Describe what happened..."
            value={details}
            onChange={(event) => setDetails(event.currentTarget.value)}
          />

          {reported ? (
            <p className="text-sm text-green-800">
              Thank you for your feedback! We will look into this issue.
            </p>
          ) : null}

          <Button type="submit" disabled={!details || reported} size="sm">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
