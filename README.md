# Mini Project Readme

This mini project is a React application that allows users to display a list of courses in either card or list format, with a progress bar indicating the completion percentage of each course.

## Components

### CourseBase

- **Props:**
  - `courseImage`: URL of the course image.
  - `courseName`: Name of the course.
  - `courseArea`: Area or category of the course.
  - `percentageCompleted`: Completion percentage of the course.
  - `containerClass`: CSS class for the container.
  - `imageClass`: CSS class for the course image.
  - `nameClass`: CSS class for the course name.
  - `areaClass`: CSS class for the course area.
  - `progressBarClass`: CSS class for the progress bar container.
  - `progressClass`: CSS class for the progress bar.

### CourseCard

- **Props:**
  - Inherits props from `CourseBase`.

### CourseListItem

- **Props:**
  - Inherits props from `CourseBase`.

### RenderComponent

- **Props:**
  - `courseImage`: URL of the course image.
  - `courseName`: Name of the course.
  - `courseArea`: Area or category of the course.
  - `percentageCompleted`: Completion percentage of the course.
  - `displayStyle`: Specifies whether to render as a card or list.

### CourseList

- **Props:**
  - `courses`: Array of course objects.
  - `displayStyle`: Specifies whether to display courses as cards or lists.

### App

- **State:**
  - `displayMode`: Tracks the current display mode (cards or lists).
  - `showDropdown`: Tracks the dropdown visibility.

- **Functions:**
  - `handleDisplayChange(mode)`: Updates the display mode based on user selection.

- **Render:**
  - Displays a dropdown to switch between card and list display modes.
  - Renders the `CourseList` component with the specified display mode and course data.

## Data

An array of course objects is provided in the `App` component, including details such as course ID, image URL, name, area, and completion percentage.

## Styles

CSS files (`Common.css`, `App.css`, `CourseList.css`) contain styling rules for consistent and responsive design across components.

### Challenging Display Mode Switch

While the display mode change in this project involves the use of spearate components for card and list views, a simpler approach could have been achieved by adjusting CSS styles dynamically. Instead of toggling between two distinct components (`CourseCard` and C`ourseListItem`), a more straightforward method might have involved altering the styling classes directly based on the chosen display mode.

This approach would require fewer components and might be easier to maintain. However, the decision to implement distinct components for card and list views could stem from a desire for modularity and extensibility, allowing for easier customization or addition of new display modes in the future. The chosen implementation reflects a trade-off between simplicity and potential future enhancements.

## Usage

To use this mini project, integrate the provided components into your React application and customize the course data as needed.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
