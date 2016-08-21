# clusterWebsite
This project is to develop a website that can be used to 
share important information about an educational cluster.

## Introduction
This was originally desined for the flux cluster at UWL but can be used for any educational cluster.
Here is a demo:
http://flux.cs.uwlax.edu/~shiwakot.prasann/clusterWebsite

If you would like to use the shell of the website it can be easily adapted to be used for your cluster.
Download the files above and follow the instructions below.

## Changing appearances
Css is used to control the background and colors of the website. But if you know jquery it can be sometimes simpler to change css using it.Css file is at bootstrap/css/main.css.It is sorted first by tag,class,id then alphabetically.The jquery file is in js/simple.js.

## General practices
All the content editing will be done in the json files in the json folder.Each section has its own json file and will be edited from here.The general thing to remember while editing is if you have empty values for some of the keys, delete the value and leave it as a empty string.If you do not want an entire section it can be deleted but i reccommend leaving the keys in if you think the section can be needed later.

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


