### WorkMarket Front-end challenge
This is a code challenge from WorkMarket

----

# Instructions
Build a single page application to display projects with detailed information. There are 2 main views: a list view and a detail view.

## Need To Have
The application should run on some MVC framework. Preferably Backbone, but you can use Angular, Ember, etc.

### List View
- The list view is a table with basic project information in it
- Clicking on a project name will bring you to the detail view for that project

### Detail View
- The detail view displays all the information associated with a project
- You need to be able to get back to the list view

## Like To Have
### List View
- Filtering for active/inactive projects
- Create new project
- Sorting on column headers
- Build progress bars for the `steps` column (otherwise just output text like "7 out of 19")

### Detail View
- Edit project
- Navigate between projects

*Note*: Use the static JSON file `challenge.json` to populate data. Creating and editing projects does not have to save state outside the browser.

Feel free to go above and beyond in the functionality, modifying the UI to account for more features is allowed as long as it aligns with the overall theme.

`challenge.pdf` is the UI specification from our UI Design team. Style the views as close to the spec as possible, the design team will look at UI accuracy and general UX, and the engineering team will look at readability/maintainability/efficiency of the code. We encourage you to be creative without sacrificing any of the qualities just mentioned.
