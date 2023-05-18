"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "./api/uploadthing/core";
import copy from "./utils/copy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <UploadButton<OurFileRouter>
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            res && copy(res[0].fileUrl);
            console.log("Files: ", res);
            console.log("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            console.log(`ERROR! ${error.message}`);
          }}
        />
        <a
          target="__blank"
          href="https://uploadthing.com/dashboard/wzz82b17p8"
          className="flex flex-col items-center justify-between p-4 text-blue-400 underline hover:text-red-400"
        >
          UploadThing Dashboard
        </a>
      </div>
    </main>
  );
}
