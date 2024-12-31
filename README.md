# Annual Review

A silly application built in a day, during the long holiday weekend of 2024. Fill out a form and store data in the URL (and localStorage for good measure) so that it's transferrable between devices, print it as PDF or add a calendar event.

## Features
* Fixed list of questions
* Store data in `localStorage` (helps with multi-year reviews and just in case the URL gets out of hand)
* Uses `pako` to archive current's year data
* Appends the `base64` encoded version of the packed data to the URL
* Add to calendar link
* Download PDF

## Tech stack
* [React](https://react.dev/)
* [Vite](https://vite.dev/)
* [Tailwindcss](https://tailwindcss.com/)
* [Jotai](https://jotai.org/)
* and others...