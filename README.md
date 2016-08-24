Hi,
Can you also go to the demo, which is the current version after style changes.

Cluster Website Documentation Outline
-intro to project
    Demo:   http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite
Changing appearances
    -css should is used but jquery also available
General practices
-Leave empty values as an empty string
-empty sections can be entirely deleted or cut off from service


----------------
Introduce the project (overview of what the software does)
This is a good place for the link to your current webpage for flux
Installation instructions
Be sure to mention dependencies and technologies used in the project (e.g., Python, CherryPy, Angular?)
Components of the Website
This should familiarize the user with what the elements are and what you are calling them.  An annotated image of the actual website would be awesome here.  You will then want to point out what files they correspond to.  This is likely to be a lengthy section with several subsections.  You may want a section on the title/menu/etc and then a section with the real content about the cluster.  At least organize it such that those two types of components are grouped together.
        - menu
-anchoring
-fav icon
-footer
-customizing for your org
-usage of keys
- current status
-the split up
-architecture
    -table
-usage of keys    
    -gallery
-get account
    -required info list
- run job
    - batchscript parts
    -commands and displaying code
-available software
    - table, multiple versions should be just a string like “2.6, 2.7, 3.4”
-resources
    -links    
    -usage of keys

Adding sections

Helpful Hints
Non-functional items and suggestions go here.  This is where you will mention how to change appearances and general practices.

















# cluster Website
This project is to develop a website that can be used to
share important information about an educational cluster.

## Introduction
This was originally desined for the flux cluster at UWL but can be used for any educational cluster.Here is a demo:http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite

## Installation
If you would like to use the shell of the website it can be easily adapted to be used for your cluster.The project uses HTML, CSS Bootstrap, jQuery, Angularjs and Python. The html web page is styled with bootstrap and jQuery. The data is served as json files through a cherrypy server (a lightweight Python webservice) and fed through an  Angularjs app to the web site. The cluster app uses ngRoute as a dependency and utilizes the routing library to change views (ng-view) without refreshing.
 Clone the files above in the directory of your choice.Install [python] (https://www.python.org/downloads/) then download the [cherrypy] (http://docs.cherrypy.org/en/latest/install.html) package. Now you are ready to get started.
The first thing to do is 






## Helpful Hints

### Changing appearances
Css is used to control the background and colors of the website. But if you know jquery it can be sometimes simpler to change css using it.Css file is at bootstrap/css/main.css.It is sorted first by tag,class,id then alphabetically.The jquery file is in js/simple.js.

### General practices
All the content editing will be done in the json files in the json folder.Each section has its own json file and will be edited from here.The general thing to remember while editing is if you have empty values for some of the keys, delete the value and leave it as an empty string.If you do not want an entire section it can be deleted but i recommend leaving the keys in if you think the section can be needed later.





















# cluster Website
This project is to develop a website that can be used to
share important information about an educational cluster.

## Introduction
This was originally designed for the flux cluster at UWL but can be used for any educational cluster. Here is a demo:http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite

## Installation
If you would like to use the skeleton of the website it can be easily adapted to be used for your cluster. The project uses HTML 5, CSS Bootstrap 3.3.7, jQuery 1.12.14, Angularjs 1.5.8 and Python 2.7.The html web page is styled with bootstrap and jQuery. The data is served as json files through a cherrypy server and fed through an  Angularjs app to the web site. The cluster app uses ngRoute as a dependency and utilizes the routing library to change views (ng-view) without refreshing. The website is linked to the Angularjs routing library 1.2.28.

### Software Setup
The project provides you with a cherrypy server(in the server folder) with minimal security. Therefore when running the server you will require a full featured web server installed on your machine to maintain security.
CSS bootstrap is statically linked and in  the bootstrap folder. If you wish to change the version, make sure to keep the bootstrap/css/main.css. You can change the Angularjs and jQuery version by changing the script they are linked to at the head of index.html.

### Getting it working
Clone the files above in the directory of your choice. Install [python] (https://www.python.org/downloads/) then download the [cherrypy] (http://docs.cherrypy.org/en/latest/install.html) package. Now you are ready to get started.
Go to the server folder using terminal and start the server.
    
    python clusterServer.py 

Now the menu json  file should show up at domainName/clusterWebsite/server/menuItems.json
You will need to go to js/services/serveMenu to change the string in  $http.get to 

return $http.get('domainName/clusterWebsite/server/api/menuItems.json')

Now you should see the default menu appear.From here you need to change $http.get in the appropriate serveSectionName.js file to match the location your clusterServer.py mounts it to. The cluster website content is ready to be edited now.

## Implementation
All the content editing will be done in the json files in the json folder.Each section has its own json file and will be edited from here.

### Menu
The menu can be edited from json/menu_items.json. Here the first thing you will see is the title of the website.
The next item is the fav icon image, you can name your image file fav_icon.png and put it in img folder or simply insert the image path.The menu can be edited by changing the name attribute of a menuItems object.
   
###Footer
The footer is very easy to set up. Simply fill in the organization and department with appropriate values, if value is not used leave as  an empty string.For the organization logo you can name your image file org_logo.jpg and put it in img folder or simply insert the image path. These along with org_logo.jpg will be on the left side of the footer.On the right you have the support array which holds strings.All the strings here will be displayed on the right side of the footer. You can have as many strings in the array as you want but the footer will expand up with each addition.    

![Demo 1](img/demoAn1.png)

###Current Status
The current status of the cluster is displayed here.To only anchor the name of the monitoring system the description has been broken into three. The start should contain the part of the string or paragraph before the name of the monitoring system and the end will contain everything after the name. The url is then linked to the name. If you take a look at json/current_status.json you will see how this is done for a one sentence description but the same logic can be applied for a paragraph or more.

![Demo 2](img/demoAn2.png)
![Demo 3](img/demoAn3.png)
![Demo 4](img/demoAn4.png)

## Helpful Hints
### Changing appearances
Css is used to control the background and colors of the website. But if you know jquery it can be sometimes simpler to change css using it.Css file is at bootstrap/css/main.css.It is sorted first by tag,class,id then alphabetically.The jquery file is in js/simple.js.

#### CSS cheat sheet

### General practices
The general thing to remember while editing the json files is: if you have empty values for some of the keys, delete the value and leave it as an empty string.If you do not want an entire section it can be deleted but i recommend leaving the keys in if you think the section can be needed later.


