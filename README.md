# Cluster Website
This project is to develop a website that can be used to share important information about an educational cluster.
 
## Introduction
It was originally designed for the Flux cluster at UW La Crosse but can be used for any educational cluster.
 
## Installation
The skeleton of the website can be easily adapted for use on any cluster. The project uses HTML5, CSS Bootstrap 3.3.7, jQuery 1.12.14, Angularjs 1.5.8, Python 2.7 and [CherryPy](http://www.cherrypy.org/) (a lightweight web framework). The html web page is styled with bootstrap and jQuery. The data is served as json files through a cherrypy server then fed through an Angularjs app to **index.html**. The cluster app uses the ‘ngRoute’ routing library to change views (‘ng-view’) without refreshing. The Angularjs routing library 1.2.28 is already included in the app (**js/app.js**).
 
### Software Setup
The project provides a lightweight cherrypy server (**server/clusterServer.py**) with minimal security. Therefore, while running the server it is advisable to utilize a full featured web server (like Apache) and firewall. We assume you have something like this in place already, or you will add the required functionality to the CherryPy server as needed.

All front-end dependencies link to static versions included in the project or externally hosted versions. CSS bootstrap is statically linked and is in **bootstrap/**. When switching versions, it is important to retain the main css file (**bootstrap/css/main.css**) which contains some CSS specifically for this website. The Angularjs, as well as jQuery, versions can be changed by altering the script tags in (**index.html**).
 
### Getting it working
Clone the files in the appropriate directory. Install [python](https://www.python.org/downloads/) then download the [cherrypy](http://docs.cherrypy.org/en/latest/install.html) package. To initialize the server, go to the **server** directory before executing **clusterServer.py**.

    cd server
    python clusterServer.py
 
The sever will make the json file available at

    domainName/clusterWebsite/server/api/menuItems.json
 
Then go to **js/services/serveMenu.js** to update the service by changing the string in ```$http.get(‘’)``` to point to where your files actually live:

    return $http.get('domainName/clusterWebsite/server/api/menuItems.json')
 
This will make the JSON file available to the app. To check the service, open index.html with a web browser. The default menu should be visible now. To establish service to all JSON files, open up each “serveSectionName.js” and update each ```$http.get(‘’)``` to match the location **server/clusterServer.py** mounts it to. At this point, the default cluster website is displayed and the content is ready to be edited.
 
## Implementation
All the content editing will be done in the JSON files in the **json** folder. Each section has its own JSON file and will be edited from there.
 
### Menu
The menu can be edited from **json/menu_items.json**. Start by editing the *title* of the website and favorite icon (*img*). To change the title, simply edit the string in the value. The favorite icon can be personalized by naming the desired image file “fav_icon.png” then saving it in **img** folder or simply insert the image path. The menu can be edited by changing the name attribute of *menuItems*.
  
### Footer
The footer is very easy to set up. Open up **json/footer.json**, then fill in the *organization* and *department* with appropriate values. If value is not used, leave it as an empty string. For the organization logo (*organization.logo*) replace the image file in **img/org_logo.jpg** and update the path if needed. The *top_button* text can also be entered here, if it is empty it will still work. Therefore, to delete this button go to the footer section in **index.html** (towards the bottom of the body). There is comment signaling the button’s start and end, comment it out. The *support* array holds strings and does not have a limit to the number of strings or their length. The footer will expand up with each addition to the array.
 
![Demo 1](img/demoAn1.png)
 
### Current Status
The current status of the cluster is displayed here. Fill out the *title* with the desired text in **json/current_status.json**. The description has been broken into three parts. The *description_start* should contain the part of the string or paragraph before the *name_of_monitoring_system_website* and the *description_end* will contain everything after the name. This way *URL* can be linked only to the *name_of_monitoring_system_website*.
 
### Architecture
Start with the *title* and *description* as always at **json/architecture.json**.
 
#### Specifications Table
This table is slightly different since both the key and values are used. Therefore, editing the *specifications* in **json/architecture.json** is done by adding/deleting keys and values in pairs. Furthermore, there may be as many *specifications* as needed but they must have unique keys.
 
#### Gallery
For the gallery the *subtitle* is used as the title. The *nodes* array contains info about each node. They each have a *name*, an array of *specs* (this can be as long as needed), and *img* attribute (which takes the image path). The text inside the gallery buttons can be modified in *buttons*.
 
### Getting an Account
Fill out the *title* as well as the *description* in **json/account_info.json**. There are two sub-sections under *sections*.
 
#### Account request information
This sub-section has a *subtitle*, a *description*, and *request_info_list_type* which takes in one of {“1”, “i”, “I”, “a”, “A”}. This determines the type of list *request_info* array will be rendered as. This array may contain as many objects as needed.        
 
#### Logging in
This sub-section has a *subtitle*, a *description*, and a *display_file*.  *display_file* is an array which takes two strings: the name of the file, and the path, respectively.
 
![Demo 2](img/demoAn2.png)
 
### Running a Job
As usual, the editing starts with *title* plus *description* in **json/run_job.json**. After which there are two sub-sections under *sections*.
 
#### Preparing a batchscript
This sub-section has a *subtitle* and a *description* (that is split into two parts). The *description_start* is your regular description for explaining how to set up a batchscript on this machine. *description_end_list_type* takes a value {“1”, “i”, “I”, “a”, “A”} to specify the type of list of *description_end* array. The *description_end* array is for the list of elements that need to be included in the batchscript and can be of variable length.  The *display_file* array takes two strings: the name to display and the path to the file.  The *display_file* should be an example batchscript.        
 
#### More on SLURM
This sub-section has a *subtitle*, a *description*, a *commands_list_type* (see above for your specification options), and *commands*.
*commands* is an array of objects which describe the various commands for the scheduler on your cluster.  Each must contains an *info* attribute to describe the command, and a *code* array of strings which serves as an example. The *display_file* array takes two strings: the name to display and the path to the file.  The *display_file* should be a useful example for this section. 
 
![Demo 3](img/demoAn3.png)
 
### Available Software
This section can be found in **json/software.json**. This section contains a *title*, *description*, *software_table_cols*, and a *software_table*. *software_table_cols* is an array of the column headings for the table.  In the template, we have four columns: *name*, *description*, *versions*, and *link*, however you can use whatever columns you like. *software_table* is an array of objects which have the structure specified in *software_table_cols*. There may be any number of objects in the *software_table*.
 
![Demo 4](img/demoAn4.png)
 
### Resources
This section can be found in **json/resources.json**. Begin with the *title* and *description*. This section use keys and values from the *links* to list resourceful websites. Therefore, while editing the *links* in ** json/resources.json** add/delete keys and values as pairs. 
 
## Helpful Hints
Here are some useful notes.
 
### Changing appearances
CSS is used to control the background and colors of the website. However, jQuery may also be used to change the appearance of the webpage. The main CSS file is located at **bootstrap/css/main.css**. It is sorted first by tag, class, id then alphabetically. The jQuery is in **js/simple.js**.
 
#### CSS cheat sheet
Here is a list of tags, classes, and ids that might help make css file modifications efficient.
 
##### Tags
* ul - used to change all unordered list style types to none; so  to assign list type to a unordered list, must do so with use of a class or id
 
#### Classes
* .code - class of all code used to render background black and text yellow
* .gallery -  class of gallery of images used to stack inline then in block
* .info -  info class for displaying content in each section used only to control font size
* .nav - nav class for used with ul to make header and footer, used to change their style
* .navbar - navbar class used to control style of the whole header or footer
* .table-data - table data class style, used for border style
* .table-row - table row class style, used for border style
* .table-striped - striped table class style , used for display (flex is used with flex-wrap)
 
#### Ids
* #backToGallery - floats back to gallery button to the right
* #backToTop - style of back to top button
* #btn-box - centers next and previous button
* #footer - sets the footer's style, used for padding, color, and text alignment
* #galleryItem - used to style gallery background after an gallery image is clicked
* #leftFoot  - pushes the organization logo, name, and department to the left
* #logo - used to add margin to the organization logo
* #rightFoot - pushes the support info  to the right
* #specifications - style of the list of machine specifications after a gallery item is clicked on
* #title - used to add margin to the website title

### General practices
The main thing to remember while editing the json files is: if there are empty values for some of the keys, delete the value and leave it as an empty string or array. However, in two cases it is essential to add/delete both keys and values as pairs, they are as follows:
* The resources section use keys and values from the *links* to list recommended websites. Therefore, edit the *links* in **json/resources.json** as pairs.
* The specifications table in Architecture section also displays keys as well as values. Therefore, while modifying the *specifications* in **json/architecture.json** add/delete keys and values as pairs.
