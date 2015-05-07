### WorkMarket Front-end challenge
This is a code challenge from WorkMarket

----

#Notes

## Items Not Completed
With the given time, I have completed the core requirements and many of the nice to haves.
In regards to the  theoretical project, naturally, adding and editing is essential, but I wasnt able to get to those. The two are highly related, and I would make the add new leverage the edit features.

Navigation between projects is the other nice to have that I didn't get to. This would require strategy and extensive team discussion, as the UX would need to be considered in detail. Does next bring you to the next from your filtered subset? Next in the list in its entirety?

Is there a need for previous and next for this particular application, in terms of use scenario? or would time be better spent implementing another feature? At its simplest going through the raw data list without any UI animations/transitions would be easy, but complexity would accumulate as time went one.

## UI Modifications for UX Reasons
I changed the way that the steps for the progress bar are laid out. Now the total number is always on the right, and the amount thus far completed is on the left. This pairs them visually with the filled and unfilled section, and allows the user to skim down the list with their eye to take inventory. On a team I wouldn't have made this decision in the vacuum, but consulted and voiced my opinions to UI/UX.

# Considerations
This is my first Angular project. I went with Angular over Backbone, because it have a high rate of adoption and is well documented and there are many online resources available. Naturally, I would adjust to whatever stack the team I was working with used if I was actually collaborating on a project.

# Build System
This site is built using Middleman which you can access at middlemanapp.com .

After installing on your machine, simple cs to this projects directory and then

```
bundle install
bundle exec middleman
```

Middleman is thoroughly documented. I used it for its asset pipeline, quick installation of Bourbon, gem capabilities, and watch features for preprocessors.

# Instructions
Items completed

### List View
- [x] The list view is a table with basic project information in it
- [x] Clicking on a project name will bring you to the detail view for that project

### Detail View
- [x] The detail view displays all the information associated with a project
- [x] You need to be able to get back to the list view

## Like To Have
### List View
- [x] Filtering for active/inactive projects
- [ ] Create new project
- [x] Sorting on column headers
- [x] Build progress bars for the `steps` column (otherwise just output text like "7 out of 19")

### Detail View
- [ ] Edit project
- [ ] Navigate between projects


## Assumed Like To Haves
- [x] Plus/Minus toggle open states for project drawers
