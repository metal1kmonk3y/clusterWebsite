
# Cluster Website
This project is to develop a website that can be used to share important information about an educational cluster.

## Introduction
This was originally designed for the Flux cluster at UW La Crosse  but can be used for any educational cluster. Here is a demo : http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite

## Installation
If you would like to use the skeleton of the website it can be easily adapted to be used for your cluster. The project uses HTML5, CSS Bootstrap 3.3.7, jQuery 1.12.14, Angularjs 1.5.8 and Python 2.7. The html web page is styled with bootstrap and jQuery. The data is served as json files through a cherrypy server and fed through an Angularjs app to **index.html**. The cluster app uses 'ngRoute' as a dependency and utilizes the routing library to change views ('ng-view') without refreshing. The website is linked to the Angularjs routing library 1.2.28 and the dependency is already included in the app(in **js/app.js**).

### Software Setup
The project provides you with a lightweight cherrypy server(in **server/clusterServer.py**) with minimal security. Therefore, while running the server it is advisable to utilize a full featured web server. This can be  installed on your machine to maintain security. CSS bootstrap is statically linked and is in **bootstrap/**. If you wish to change the version, make sure to keep the **bootstrap/css/main.css**. You can change the Angularjs and jQuery version by changing the script links in the head of **index.html**.

### Getting it working
Clone the files in the directory of your choice. Install [python](https://www.python.org/downloads/) then download the [cherrypy](http://docs.cherrypy.org/en/latest/install.html) package. Now you are ready to get started. Go to the server folder using terminal and start the server by typing
    
    python clusterServer.py 

Now the menu json  file should show up at domainName/clusterWebsite/server/menuItems.json
You will need to go to js/services/serveMenu.js to change the string in ```$http.get(‘’)``` to 

    return $http.get('domainName/clusterWebsite/server/api/menuItems.json')

Now you should see the default menu appear.From here you need to change ```$http.get(‘’)``` in every serveSectionName.js  file to match the location your clusterServer.py mounts it to. The cluster website is ready to be edited now.


## Implementation
All the content editing will be done in the json files in the json folder. Each section has its own json file and will be edited from there.

### Menu
The menu can be edited from **json/menu_items.json**. The first thing you will see is the *title* of the website. The next item is the favorite icon *img*, you can name your image file “fav_icon.png” and put it in **img** folder or simply insert the image path. The menu can be edited by changing the name attribute of a *menuItems*.
   
### Footer
The footer is very easy to set up. Open up **json/ footer.json** and simply fill in the organization and department with appropriate values. If value is not used leave as an empty string. For the organization logo (*organization.logo*) you can name your image file “org_logo.jpg” and put it in **img** folder or simply insert the image path. These along with **img/org_logo.jpg** will be on the left side of the footer.
The *top_button* text can also be entered here, if it is empty it will still work.If you want to delete this button you have to got to **index.html** and scroll to the footer section (towards the bottom of the body). I have put a comment where the button starts and ends so you can easily comment it out. On the right you have the support array which holds strings. All the strings here will be displayed on the right side of the footer. You can have as many strings in the array as you want but the footer will expand up with each addition.    

![Demo 1](img/demoAn1.png)

### Current Status
The current status of the cluster is displayed here. Fill out the * title* with the desired text in **json/ current_status.json**. The description has been broken into three parts. The *description_start* should contain the part of the string or paragraph before the *name_of_monitoring_system_website* and the *description_end* will contain everything after the name. This way *URL* can be  linked only to the *name_of_monitoring_system_website*. If you take a look at **json/current_status.json** you will see how this is done for a one sentence description but the same logic can be applied for a paragraph or more.

### Architecture
Start with the *title* and *description* as always at **json/ architecture.json**.

#### Specifications Table
After that you will stumble upon *specifications*. This is a little different since both the key and values are used to make a table. You can see the key is capitalized and has spaces in between. Therefore, if you are editing the *specifications* object in **json/architecture.json** add/delete keys and values as pairs. Furthermore, you can have as many *specifications* as you wish but they must have unique keys.

#### Gallery
For the gallery we use the *subtitle* as the title. The **nodes** array contains info about each node. They have a *name*, an array of *specs* (this can be as long as you can or empty), and *img* attribute which takes the image path. The text inside the gallery buttons can be changed in *buttons*.

### Getting an Account
Fill out the *title* as well as *description* in **json/account_info.json**. Then we have two sub-sections under *sections*.

#### Account request information
This sub-section has a *subtitle* in addition to a *description*. Then there is *request_info_list_type* which takes in one of  { “1”, “i”, “I”, “a”, “A”}. This determines the type of list *request_info* array is going to be. This array may contain many strings or none.        

#### Logging in
This sub-section also has a *subtitle* and a *description*. The *display_file* array takes two strings, first one is the name of the file and the second is the path.

![Demo 2](img/demoAn2.png)

### Running a Job
As usual the section starts with *title* plus *description* in **json/run_job.json.** After which there are two sub-sections under *sections*.

#### Preparing a batchscript
This sub-section follow the tradition of a *subtitle* and a *description* that is split into two parts. The *description_start*  is your regular description so fill it out. Then there is *description_end_list_type* which takes in { “1”, “i”, “I”, “a”, “A”} to determines the type of list *description_end* array is, this array may contain many strings or none. The *display_file* array takes two strings, first one is the name and the second one is the path of the file.        

#### More on SLURM
This sub-section comes with a *subtitle*  as well as a *description*. Then the *commands_list_type* determines how the list is ordered by taking in { “1”, “i”, “I”, “a”, “A”}. You can have as many objects in *commands* as you want and the name of the object does not matter. However, they must all have an info attribute plus a code array (this may have any number of strings). The *display_file* array takes two strings, first is the name of the file and the second is the path of the file.

![Demo 3](img/demoAn3.png)

### Available Software
This section can be edited form **json/software.json**. Start with the *title* and *description*. Then fill out what you would like your four column names in the *software_table_cols* array.
After which start filling out *name*, *description*, *versions*(if there are multiple versions, use a string with commas like  “2.6, 2.7, 3.4”), and *link*  in *software_table*. You may have as many objects as you want in the *software_table*.

![Demo 4](img/demoAn4.png)

### Resources 
Resources section can be changed from  **json/resources.json**. Begin with the *title* and *description*.This section use keys and values from the *links* to list resourceful websites. Therefore, if you are editing the *links*  in ** json/resources.json** add/delete keys and values as pairs.

## Helpful Hints
I highly recommend you read and follow the following hints.

### Changing appearances
Css is used to control the background and colors of the website. However, if you are familiar with jquery, manipulating the CSS can be simpler. Css file is at **bootstrap/css/main.css**. It is sorted first by tag, class, id then alphabetically. The jquery file is in **js/simple.js**. 

#### CSS cheat sheet
Here is a list of tags, classes, and ids that might help you navigate the css file better.

##### Tags
* ul - used to change all unordered list style types to none, so if you want to assign list type to a unordered list must do so with use of a class or id 

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
* #specifications - style of the list of specification after a gallery item is clicked on
* #title - used to add margin to the website title 



### General practices
The main thing to remember while editing the json files is : if you have empty values for some of the keys, delete the value and leave it as an empty string. However in two cases you must add/delete both keys and values, they are as follows:

* The resources section use keys and values from the *links* object to list recommended websites. Therefore, if you are  editing the *links* object in **json/resources.json** add/delete keys and values as pairs.
* The specifications table in Architecture section also displays keys and values. Therefore, if you are editing the *specifications* object in **json/architecture.json** add/delete keys and values as pairs.
