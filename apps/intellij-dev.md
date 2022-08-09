# how to supercharge intellij 

_taken from https://docs.gluonhq.com/#_ide_live_templates_

2.6. IDE Live templates
A live template specifies an abbreviation which auto-completes a large chunk of code for you. Live templates for IntelliJ IDEA IDE has been defined to create JavaFX properties, including getters, setters, and the property method. It supports all property types, and both read-only and read/write properties.

The template can be downloaded from [here](https://gluonhq.com/download/intellij-idea-live-templates). Once the file has been downloaded, simply do the following steps to import them into your IntelliJ IDEA:

* Unzip the file and save settings.jar on the file system
* In IntelliJ IDEA, click on the ‘File’ → ‘Import Settings…’
* Locate settings.jar file on your file system
* Restart IntelliJ IDEA, when prompted

Once the IDE has been restarted, from within your editor, you may simply type `fxprop`, and a popup lets you choose the type of property you want. Once you press tab (or enter), the code for property is generated inside the editor. You can then immediately start typing the property name, and this will automatically update all the method names. Once you’ve done this, all you need to do is import the relevant classes.


