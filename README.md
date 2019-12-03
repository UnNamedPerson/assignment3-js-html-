# assignment3-js-html-
This was an assingment for a course I took in college about web development. I am reuploading the assignment again on my own github repo.

########################################################################################################################################
# CSC 210 
## Assignment - JavaScript and the Document Object Model
### Assignment Duration: One Week
### Available points: 10 + 2 Bonus

For this assignment you will be using JavaScript to dynamically manipulate content on HTML pages.

# Requirements
### We will be creating a small car make/model finder using cascading drop-down elements.

## HTML
Start with a new, basic HTML file *index.html*.  Nothing crazy here, but it should contain a body and that is all.  We are building the entire DOM via JavaScript for this one.

## CSS
As needed, ensure you have resonably pleasing styles in your application.

## JavaScript
Create a file called *cars.js* and reference it from your *index.html* page.  This is where all of your code will go.
# CSC 210 
## Assignment - JavaScript and the Document Object Model
### Assignment Duration: One Week
### Available points: 10 + 2 Bonus

For this assignment you will be using JavaScript to dynamically manipulate content on HTML pages.

# Requirements
### We will be creating a small car make/model finder using cascading drop-down elements.

## HTML
Start with a new, basic HTML file *index.html*.  Nothing crazy here, but it should contain a body and that is all.  We are building the entire DOM via JavaScript for this one.

## CSS
As needed, ensure you have resonably pleasing styles in your application.

## JavaScript
Create a file called *cars.js* and reference it from your *index.html* page.  This is where all of your code will go.

* Data
  * You will need to create a data structure to hold several dependent attributes for cars, think about using *arrays* and/or *objects* for this.  This step is important
  * Example data heirarchy: Make -> Model -> Trim
  * Honda -> CR-V -> EX-L
  * Optionally add color if you are feeling ambitious!
* Display
  * You will need to create an initial drop-down element *select* that displays all available makes (honda, chevy, toyota, bmw, etc.)
  * Upon changing the selection of your first drop-down, you must dynamically create a second drop-down with a filtered/related list of models that fit within that Make
    * Ex: If Chevy was selected, then I should see Camaro, Corvette, etc.
  * Repeat this again once a model has been chosen to display available trims or colors
  * Once those have been selected, display a picture and some information about the selected car.  
* Cleanup
  * If someone goes BACK and changes a parent selection, you should handle how the children behave.  
    * Ex: I have selected Chevy -> Camaro, but then I decide to pick BMW, the Camaro box should now be filtered (can also be recreated/replaced) to only show BMWs
* Data
  * You will need to create a data structure to hold several dependent attributes for cars, think about using *arrays* and/or *objects* for this.  This step is important
  * Example data heirarchy: Make -> Model -> Trim
  * Honda -> CR-V -> EX-L
  * Optionally add color if you are feeling ambitious!
* Display
  * You will need to create an initial drop-down element *select* that displays all available makes (honda, chevy, toyota, bmw, etc.)
  * Upon changing the selection of your first drop-down, you must dynamically create a second drop-down with a filtered/related list of models that fit within that Make
    * Ex: If Chevy was selected, then I should see Camaro, Corvette, etc.
  * Repeat this again once a model has been chosen to display available trims or colors
  * Once those have been selected, display a picture and some information about the selected car.  
* Cleanup
  * If someone goes BACK and changes a parent selection, you should handle how the children behave.  
    * Ex: I have selected Chevy -> Camaro, but then I decide to pick BMW, the Camaro box should now be filtered (can also be recreated/replaced) to only show BMWs
