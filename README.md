# Incubyte String Calculator Template

## Overview

This project contains a **String Calculator template** built using React. The primary goal is for candidates to implement the functionality and improve accessibility in the provided UI component.

## Project Structure

- **src/**
  - `App.tsx`: The React component with accessibility issues.
  - `stringCalculator.ts`: Implementation of the String Calculator logic (to be developed).
- **tests/**
  - `stringCalculator.test.ts`: Suite of tests for the String Calculator functionality (to be developed).

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/string-calculator.git
   cd string-calculator
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

4. **Run Tests**

   ```bash
   npm test
   ```

## Task for Candidates

- Implement the functionality of the String Calculator following TDD best practices.
- Resolve accessibility issues in the `App.tsx`.

# TDD Implementation

The String Calculator was developed strictly through test-driven development

## Implemented behaviors

* Empty string returns `0`
* Single number returns its numeric value
* Comma-separated values are summed
* Newline delimiters are supported
* Invalid inputs throw errors

All behaviors are covered by unit tests.

# Accessibility Improvements

The original UI contained several accessibility issues. Fixes were applied incrementally and verified with both behavior tests and automated checks.

## Changes include

* Added an accessible `<label>` for the textarea
* Replaced the non-interactive `div` with a real `<button>`
* Implemented dynamic error feedback using `role="alert"`
* Announced result updates using an `aria-live` region
* Added descriptive `alt` text to the image
* Corrected heading structure (`h1` followed by `h2`)
* Improved text contrast to meet WCAG AA requirements
* Wrapped main content in a semantic `<main>` landmark
* Added automated accessibility checks using jest-axe

# Deployment

Live demo: https://react-tdd-accessibility-reference.vercel.app/


# Notes

* Accessibility behavior is validated using React Testing Library and jest-axe
* The interface works correctly for screen readers and general users
