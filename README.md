 # Cluster Website
This project is to develop a website that can be used to share important information about an educational cluster.
 
## Introduction
It was originally designed for the Flux cluster at UW La Crosse but can be used for any educational cluster. Here is a demo: http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite 
 
## Installation
The skeleton of the website can be easily adapted for use by any cluster. The project uses HTML5, CSS Bootstrap 3.3.7, jQuery 1.12.14, Angularjs 1.5.8 and Python 2.7. The html web page is styled with bootstrap and jQuery. The data is served as json files through a cherrypy server then fed through an Angularjs app to **index.html**. The cluster app uses ‘ngRoute’ as a dependency and utilizes the routing library to change views (‘ng-view’) without refreshing. The website is linked to the Angularjs routing library 1.2.28 and the dependency is already included in the app (**js/app.js**).
 
### Software Setup
The project provides a lightweight cherrypy server (**server/clusterServer.py**) with minimal security. Therefore, while running the server it is advisable to utilize a full featured web server (like Apache). This can be installed on your machine to maintain security. CSS bootstrap is statically linked and is in **bootstrap/**. While switching versions, it is essential to retain the main css file (**bootstrap/css/main.css**). The Angularjs as well as jQuery versions can be changed by altering the script links (**index.html**).
 
### Getting it working
Clone the files in the appropriate directory. Install [python](https://www.python.org/downloads/) then download the [cherrypy](http://docs.cherrypy.org/en/latest/install.html) package. To initialize the server, go to the **server** directory before executing **clusterServer.py**.
 
    cd server
python clusterServer.py
 
The sever will make the json file available at
 
domainName/clusterWebsite/server/menuItems.json
 
Then go to **js/services/serveMenu.js** to change update the service by changing the
string in ```$http.get(‘’)``` to
 
return $http.get('domainName/clusterWebsite/server/api/menuItems.json')
 
This will make the json file available to the app. To check the service, open index.html with a web browser. The default menu should be visible now. To establish service to all json files, open up each “serveSectionName.js” and update each ```$http.get(‘’)``` to match the location clusterServer.py mounts it to. At this point, the default cluster website is displayed and the content is ready to be edited.
 
 
## Implementation
All the content editing will be done in the json files in the json folder. Each section has its own json file and will be edited from there.
 
### Menu
The menu can be edited from **json/menu_items.json**. Start by editing the *title* of the website and favorite icon (*img*). To change the title, simply edit the string in the value. The favorite icon can be personalized by naming the desired image file “fav_icon.png” then saving it in **img** folder or simply insert the image path. The menu can be edited by changing the name attribute of *menuItems*.
  
### Footer
The footer is very easy to set up. Open up **json/footer.json**, then fill in the *organization* and *department* with appropriate values. If value is not used, leave it as an empty string. For the organization logo (*organization.logo*) replace the image file in **img/org_logo.jpg**and update the path if needed. The *top_button* text can also be entered here, if it is empty it will still work. Therefore, to delete this button go to the footer section in **index.html (towards the bottom of the body. There is comment signaling the button’s start and end, comment it out. The *support * array holds strings plus does not have a cap. The footer will expand up with each addition.    
 
![Demo 1](img/demoAn1.png)
 
### Current Status
The current status of the cluster is displayed here. Fill out the * title* with the desired text in **json/current_status.json**. The description has been broken into three parts. The *description_start* should contain the part of the string or paragraph before the *name_of_monitoring_system_website* and the *description_end* will contain everything after the name. This way *URL* can be linked only to the *name_of_monitoring_system_website*.
 
### Architecture
Start with the *title* and *description* as always at **json/architecture.json**.
 
#### Specifications Table
This table is slightly different since both the key and values are employed. Therefore, editing the *specifications* in **json/architecture.json** is done by adding/deleting keys and values in pairs. Furthermore, there may be as many *specifications* as needed but they must have unique keys.
 
#### Gallery
For the gallery the *subtitle* is used as the title. The **nodes** array contains info about each node. They each have a *name*, an array of *specs* (this can be as long as you can or empty), and *img* attribute (which takes the image path). The text inside the gallery buttons can be modified in *buttons*.
 
### Getting an Account
Fill out the *title* as well as the *description* in **json/account_info.json**. There are two sub-sections under *sections*.
 
#### Account request information
This sub-section has a *subtitle* in addition to a *description*. Then there is *request_info_list_type* which takes in one of {“1”, “i”, “I”, “a”, “A”}. This determines the type of list *request_info* array will be rendered as. This array may contain as many as needed (or none).        
 
#### Logging in
This sub-section also has a *subtitle* in addition to a *description*. The *display_file* array takes two strings, first one is the name of the file and the second is the path.
 
![Demo 2](img/demoAn2.png)
 
### Running a Job
As usual, this editing starts with *title* plus *description* in **json/run_job.json**. After which there are two sub-sections under *sections*.
 
#### Preparing a batchscript
This sub-section has a *subtitle* and a *description* (that is split into two parts). The *description_start* is your regular description so fill it out. Then there is *description_end_list_type* which takes in {“1”, “i”, “I”, “a”, “A”} to determines the type of list *description_end* array is, this array may contain many strings or none. The *display_file* array takes two strings, first one is the name while the second one is the path of the file.        
 
#### More on SLURM
This sub-section comes with a *subtitle* as well as a *description*. Then the *commands_list_type* determines how the list is ordered by taking in {“1”, “i”, “I”, “a”, “A”}. You can have as many objects in *commands* as required, the name of the object does not matter. However, they must all have an *info* attribute plus a *code* array (this may have any number of strings). The *display_file* array takes two strings, first is the name of the file whereas the second is the file path.
 
![Demo 3](img/demoAn3.png)
 
### Available Software
This section can be edited form **json/software.json**. Start with the *title* and *description*. Then fill out the four column names in the *software_table_cols* array. After which, start editing *name*, *description*, *versions*(if there are multiple versions, use a string with commas like “2.6, 2.7, 3.4”), and *link* in *software_table*. There may be any number of objects in the *software_table*
 
![Demo 4](img/demoAn4.png)
 
### Resources
Resources section can be changed from **json/resources.json**. Begin with the *title* and *description*.This section use keys and values from the *links* to list resourceful websites. Therefore, while editing the *links* in ** json/resources.json** add/delete keys and values as pairs. 
 
## Helpful Hints
Here are some useful notes.
 
### Changing appearances
Css is used to control the background and colors of the website. However, jquery is also available. Css file is at **bootstrap/css/main.css**. It is sorted first by tag, class, id then alphabetically. The jquery file is in **js/simple.js**.
 
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
The main thing to remember while editing the json files is: if there are empty values for some of the keys, delete the value and leave it as an empty string. However, in two cases it is essential to add/delete both keys and values as pairs, they are as follows:
* The resources section use keys and values from the *links* to list recommended websites. Therefore, edit the *links* in **json/resources.json** as pairs.
* The specifications table in Architecture section also displays keys as well as values. Therefore, while modifying the *specifications* in **json/architecture.json** add/delete keys and values as pairs.
