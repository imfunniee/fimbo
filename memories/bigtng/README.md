# OnePagers Gradient Website Template

[![Donate Now](https://img.shields.io/badge/donate-now-brightgreen.svg)](https://donorbox.org/onepagers-themes) [![Beerpay](https://beerpay.io/haydenryan/OnePagers-gradient/badge.svg?style=plastic)](https://beerpay.io/haydenryan/OnePagers-gradient) [![license](https://img.shields.io/github/license/haydenryan/onepagers-gradient.svg)](https://github.com/haydenryan/OnePagers-gradient)
[![GitHub stars](https://img.shields.io/github/stars/haydenryan/onepagers-gradient.svg?style=social&label=Star)](https://github.com/haydenryan/OnePagers-gradient)[![GitHub forks](https://img.shields.io/github/forks/haydenryan/onepagers-gradient.svg?style=social&label=Fork)](https://github.com/haydenryan/OnePagers-gradient)[![GitHub watchers](https://img.shields.io/github/watchers/haydenryan/onepagers-gradient.svg?style=social&label=Watch)](https://github.com/haydenryan/OnePagers-gradient)[![GitHub followers](https://img.shields.io/github/followers/haydenryan.svg?style=social&label=Follow)](https://github.com/haydenryan/OnePagers-gradient)


#### View the demo (and project website): https://haydenryan.github.io/OnePagers-gradient/

"Gradient" is part of the [OnePagers](https://github.com/haydenryan/OnePagers) collection of sleek single-page website templates by [@HaydenRyan](https://github.com/haydenryan).

  - Fully responsive, based on Bootstrap
  - Valid HTML, clean coding, easy to customise
  - 74 gradients included
  - FontAwesome 4.7.0 included

[![Screenshot 1](https://haydenryan.github.io/OnePagers-gradient/screenshot.png)](https://donorbox.org/onepagers-themes)
[![Screenshot 2](https://haydenryan.github.io/OnePagers-gradient/screenshot2.png)](https://donorbox.org/onepagers-themes)

# Table of contents
1. [What's Inside](#whats-inside)
2. [Installation](#installation)
3. [Changing Content](#changing-content)
    1. [Changing Section Names and Links](#changing-section-names-and-links)
4. [Changing the Gradient](#changing-the-gradient)
5. [Adding Extra Sections](#adding-extra-sections)
6. [Change navbar transparency](#change-navbar-transparency)

## Whats Inside
| Package | Website |
| ------ | ------ |
| Bootstrap | http://getbootstrap.com |
| Font Awesome | http://fontawesome.io |
| uiGradients | http://uigradients.com |
| Google Fonts | http://fonts.google.com

## Installation
[Download the latest release as a .zip archive](https://github.com/haydenryan/OnePagers-gradient/archive/master.zip)
To install, simply upload the following files to your host:
- css/
  - gradients.min.css
  - onepagers-gradient.css
  - bootstrap-theme.min.css
  - bootstrap.min.css
- font-awesome/
  - upload this whole directory (if you're using Font Awesome icons)
- js/
  - bootstrap.min.js
- index.html

No other files are required for the template to work.

In index.html, you can **easily delete the demo content**. Start with deleting the Demo Gradients - lines 99-511. Alternatively, search the code for the string DELETE THIS (there is also a Javascript function you can delete at the bottom of the page)
## Changing Content
The template is broken up into 4 sections, by default. To add more, read the documentation on [adding extra sections](#adding-extra-sections).

Each section's content is marked at the beginning with the tag ```<-- START SECTION x -->``` and at the end with ```<-- END SECTION x -->```.

For exmple, to replace the content in Section 2, change the content between ```<!-- START SECTION 2 -->``` and ```<-- END SECTION 2 -->``` in the main index.html file

### Changing Section Names and Links
By default, the sections are named ```section1```, ```section2``` etc. This results in the links for each section being labelled http://youraddresshere/#section1 This is pretty bland and you should change this.

To change the name of a section:
1. Change the bold section link in the navbar (~line 50)
```<li><a href="```**```#section2```**```">The Gradients</a></li>```

2. Change the ID of the corresponding div, for example ```<div class="col-md-12 section deep-space" id="```**```section2```**```">```


## Changing the Gradient
To choose a gradient, [visit the demo](https://haydenryan.github.io/OnePagers-gradient/) and scroll to the "Gradients" section. Each gradient is listed with its class name. Mouse over any gradient to flip it in the inverse direction.

To change a section's gradient, change its **last class** (this is where we place the gradient class, by default). For example to change Section 2 from deep-space to aubergine, change ```<div class="col-md-12 section ```**```deep-space```**```" id="section2">
``` to ```<div class="col-md-12 section ```**```aubergine```**```" id="section2">``` 

Want to get fancy and show the inverted version of aubergine? Just change the class name to ```<div class="col-md-12 section ```**```aubergine-inverted```**```" id="section2">``` 

## Adding Extra Sections
To add an extra section, copy and paste the code below into **index.html AFTER** the tag ```<!-- END SECTION 4 -->```, making sure to change **INSERT_GRADIENT_NAME** and **INSERT_SECTION_ID**:

```
<!-- START EXTRA SECTION -->
<div class="row">
<div class="col-md-12 section innershadow INSERT_GRADIENT_NAME" id="INSERT_SECTION_ID">
<div class="col-md-1">
</div>
<div class="col-md-10">
<!-- START EXTRA SECTION CONTENT -->
<h1>Heading</h1><br>
<p class="lead">Lead Paragraph</p>
<p>Next Paragraph</p>
<!-- END EXTRA SECTION CONTENT -->
</div>
<div class="col-md-1">
</div></div></div>
<!-- END EXTRA SECTION -->
```

Don't forget to add the section to the navbar, for example:

```
<li><a href="#INSERT_SECTION_ID">Section Name</a></li>
```

## Change navbar transparency
Want to change the transparency of the navbar? It's easy! By default, it's set to 95% opaque.

Simply go to line 108 of ```css/onepagers-gradient.css``` and edit the following code:
```  
background-color: rgba(34, 34, 34, 0.95) !important;
```
Changing **0.95** to a different value. If you want it to be completely opaque, change this to **1**. If you want to make it more transparent, change it to something like **0.5**. Have a play around!

License
----

GNU GPLv3 
