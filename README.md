
# Cluster Website
This project is to develop a website that can be used to share important information about an educational cluster.

## Introduction
This was originally designed for the flux cluster at UWL but can be used for any educational cluster. Here is a demo:http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite

## Installation
If you would like to use the skeleton of the website it can be easily adapted to be used for your cluster. The project uses HTML 5, CSS Bootstrap 3.3.7, jQuery 1.12.14, Angularjs 1.5.8 and Python 2.7. The html web page is styled with bootstrap and jQuery. The data is served as json files through a cherrypy server and fed through an  Angularjs app to the web site. The cluster app uses ngRoute as a dependency and utilizes the routing library to change views (ng-view) without refreshing. The website is linked to the Angularjs routing library 1.2.28 and the dependency is already included in the app(in js/app.js).

### Software Setup
The project provides you with a cherrypy server(in the server folder) with minimal security. Therefore when running the server you will require a full featured web server installed on your machine to maintain security. CSS bootstrap is statically linked and in  the bootstrap folder. If you wish to change the version, make sure to keep the bootstrap/css/main.css. You can change the Angularjs and jQuery version by changing the script they are linked to at the head of index.html.

### Getting it working
Clone the files above in the directory of your choice. Install [python] (https://www.python.org/downloads/) then download the [cherrypy] (http://docs.cherrypy.org/en/latest/install.html) package. Now you are ready to get started.
Go to the server folder using terminal and start the server by typing
    
    python clusterServer.py 

Now the menu json  file should show up at domainName/clusterWebsite/server/menuItems.json
You will need to go to js/services/serveMenu.js to change the string in  $http.get to 

return $http.get('domainName/clusterWebsite/server/api/menuItems.json')

Now you should see the default menu appear.From here you need to change $http.get in every serveSectionName.js file to match the location your clusterServer.py mounts it to. The cluster website content is ready to be edited now.


## Implementation
All the content editing will be done in the json files in the json folder. Each section has its own json file and will be edited from here.

### Menu
The menu can be edited from json/menu_items.json. Here the first thing you will see is the title of the website. The next item is the favorite icon image, you can name your image file fav_icon.png and put it in img folder or simply insert the image path. The menu can be edited by changing the name attribute of a menuItems object.
   
### Footer
The footer is very easy to set up. Simply fill in the organization and department with appropriate values, if value is not used leave as  an empty string.For the organization logo you can name your image file org_logo.jpg and put it in img folder or simply insert the image path. These along with org_logo.jpg will be on the left side of the footer.On the right you have the support array which holds strings.All the strings here will be displayed on the right side of the footer. You can have as many strings in the array as you want but the footer will expand up with each addition.    

![Demo 1](img/demoAn1.png)

### Current Status
The current status of the cluster is displayed here. Fill out the title with the desired text. The description has been broken into three parts. The start should contain the part of the string or paragraph before the name of the monitoring system and the end will contain everything after the name. This way url can be  linked only to the name. If you take a look at json/current_status.json you will see how this is done for a one sentence description but the same logic can be applied for a paragraph or more.

### Architecture
Start with the title and description as always.

#### Specifications Table
After that you will stumble upon specifications. This is a little different since both the key and values are used to make a table. You can see the key is capitalized and has spaces in between. Therefore, if you are editing the “specifications” object  in  json/architecture.json add/delete keys and values as pairs. Furthermore, you can have as many specifications as you wish but they must have unique keys.

#### Gallery
For the gallery we use the “subtitle” object as the title of the Gallery. Then the nodes array contains info about each node. They have a name, an array of specs (this can be as long as you can or empty), and img attribute which takes the image path.

### Getting an Account
Fill out the title and description. Then we have two sections, here you may delete the values if you do not have them.

#### Section 1
Section one has a subtitle and a description. Then there is "request_info_list_type"  object which takes in { "1", “i”, “I”, “a”, “A”} which determines the type of list "request_info" array is, this array may contain many strings or none, that is up to you.        

#### Section 2
Section two also has a subtitle and a description. The “display_file” array take two strings, first one is the name of the file and the second is the path.

![Demo 2](img/demoAn2.png)
![Demo 3](img/demoAn3.png)
![Demo 4](img/demoAn4.png)



## Helpful Hints
I highly recommend you read and follow the following hints.

### Changing appearances
Css is used to control the background and colors of the website. But if you know jquery it can be sometimes simpler to change css using it. Css file is at bootstrap/css/main.css. It is sorted first by tag, class, id then alphabetically. The jquery file is in js/simple.js.

#### CSS cheat sheet
Here is a list of tags, classes, and ids that might help you navigate the css file better.

##### Tags
ul - used to change all unordered list style types to none, so if you want to assign list type to a unordered list must do so with use of a class or id 

#### Classes
.code - class of all code used to render background black and text yellow
.gallery -  class of gallery of images used to stack inline then in block 
.info -  info class for displaying content in each section used only to control font size
.nav - nav class for used with ul to make header and footer, used to change their style
.navbar - navbar class used to control style of the whole header or footer
.table-data - table data class style, used for border style
.table-row - table row class style, used for border style
.table-striped - striped table class style , used for display (flex is used with flex-wrap)

#### Ids
#backToGallery - floats back to gallery button to the right
#backToTop - style of back to top button
#btn-box - centers next and previous button
#footer - sets the footer's style, used for padding, color, and text alignment
#galleryItem - used to style gallery background after an gallery image is clicked
#leftFoot  - pushes the organization logo, name, and department to the left 
#logo - used to add margin to the organization logo
#rightFoot - pushes the support info  to the right
#specifications - style of the list of specification after a gallery item is clicked on
#title - used to add margin to the website title 

### General practices
The general thing to remember while editing the json files is : if you have empty values for some of the keys, delete the value and leave it as an empty string. However in two cases you must add/delete both keys and values, they are as follows:

The resources section use keys and values from the “links” object to list recommended websites. Therefore, if you are editing the “links” object  in  json/resources.json add/delete keys and values as pairs.
The specifications table in Architecture section also displays keys and values. Therefore, if you are editing the “specifications” object  in  json/architecture.json add/delete keys and values as pairs.


