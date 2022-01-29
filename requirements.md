In order for us to more concretely understand your approach to coding and implementation, please complete the following exercise.

You may use a JavaScript framework of your choice. Please submit your solution as a zip folder containing any relevant files.

The task is to build an app containing the following elements:

- A textfield T_prefix
- A pair of textfields T_name and T_surname
- A listbox L
- Buttons B_create, B_update, and B_delete
- The three labels seen in the screenshot

L presents a view of the data in a database that consists of a list of names. At most one entry can be selected in L at a time.

By entering a string into T_prefix, the user can filter the names whose surname starts with the entered prefix -- this should happen immediately without having to submit the prefix with enter.

Clicking B_create will append the resulting name from concatenating the strings in T_name and T_surname to L.

B_update and B_delete are enabled if and only if an entry in L is selected. In contrast to B_create, B_update will not append the resulting name but instead replace the selected entry with the new name

B_delete will remove the selected entry.

The layout is to be done like suggested in the screenshot. In particular L should have a maximum height of 200px and scroll after exceeding that.

On refreshing the page, the list of names as it existed before the page was refreshed should be shown in L. T_prefix and both name fields should be blank.

Rubric
- All elements are present
- Update and Delete buttons are disabled if no name is selected
- All buttons work as expected
- Filter is applied to the surname
- Filter works immediately
- The list persists and fields are blank after refresh
- L scrolls after height of 200px