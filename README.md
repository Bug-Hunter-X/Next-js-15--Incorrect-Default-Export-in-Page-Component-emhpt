# Next.js 15: Incorrect Default Export in Page Component

This repository demonstrates a common error in Next.js 15 applications involving incorrect default exports in page components.  The issue arises when the default export of a page component is missing or not a valid React component, leading to runtime errors.

## Bug

The `bug.js` file illustrates the faulty code. The missing `React` import and improper export of the component will cause a build error or runtime crash.

## Solution

The `bugSolution.js` file contains the corrected code.  It demonstrates the proper import of `React` and the correct default export of the page component. This ensures the component is correctly rendered by Next.js.