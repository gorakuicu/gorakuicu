'use client';

import Image from 'next/image';

import Href from '@/features/common/Href';
import Structure from '@/features/layout/Structure';

export default function License() {
  return (
    <Structure className="flex w-full flex-grow flex-col items-center justify-center">
      <small className="mb-8 text-center">License for aiko.icu products</small>
      <Href className="mb-12" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        <h1 className="text-center text-4xl font-bold">
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
        </h1>
      </Href>
      <p className="mb-12 text-center">
        Artistic images created for the{' '}
        <Href href="https://aiko.icu/">
          <b>aikoicu</b>
        </Href>{' '}
        project and its subprojects are distributed under the license.
      </p>
      <Href
        className="mb-12 flex items-center justify-center gap-4"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        showIcon={false}
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
      </Href>
    </Structure>
  );
}
