'use client';

import Image from 'next/image';

import Structure from '@/features/layout/Structure';

export default function License() {
  return (
    <Structure className="flex w-full flex-grow flex-col items-center justify-center">
      <a
        className="mb-12 mt-24"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h1 className="text-center text-4xl font-bold">
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
        </h1>
      </a>
      <p className="mb-12 text-center">
        Artistic images created for the
        <a href="https://aiko.icu/" rel="noopener noreferrer" target="_blank">
          <b> aikoicu </b>
        </a>
        project and its subprojects are distributed under the license.
      </p>
      <a
        className="mb-12 flex items-center justify-center gap-4"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt="CC BY-NC-SA 4.0"
          height={30}
          src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
          width={60}
        />
        <br />
        <Image
          alt="CC BY-NC-SA 4.0"
          height={40}
          src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg"
          width={160}
        />
      </a>
    </Structure>
  );
}
