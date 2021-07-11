# tesla-battery-range-calculator

This Tesla Battery Range Calculator was entirely built with HTML, JavaScript and SCSS. I chose to  use the Sass preprocessor because it makes it easier and faster to nest selectors.

By using the Calculator you’ll be able to determine how many kilometers your Tesla Model S car will drive according to various conditions: speed, air conditioning/heating on/off, outside temperature and wheel size.

There’s a speed selector that lets the user choose between 70 and 140 km/h, a temperature selector that lets the user choose between -10° and 40° and automatically shows the heating button when the temperature is between -10° and 10° and the air conditioning button when the temperature is between 20° and 40° and a wheel size selector that allows the user to choose between 19” wheels and 21” wheels. It is not possibile to select both wheel size at the same time, by clicking one the other one gets automatically deselected. 

Two Tesla S Models are available on the calculator: the Model S 100D and the Model S P100D; each model has its dedicated section where the drivable kilometers will show and change according to the selected conditions. At the moment it is only working for the -10° temperature as I am studying how to find a better way to get the correct data from the JSON files where it’s stored; the current implementation requires too much lines of code for each condition and it isn’t convenient to keep building it this way at the moment. 

As for the UI, it is responsive and on smaller screens it has an hamburger menu to avoid squashing all the menu items together; the footer too is different on smaller screen as it only shows three categories that would ideally bring the user to the specific pages with all the info needed. 
