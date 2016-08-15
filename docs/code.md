# Visual Studio Code

Visual Studio Code is a Free Open Source code editor that you can use to edit your programs.

Working from Visual Studio code allows you to benefit from all the features
of a professional IDE while working with PXT: working with files, 
git integration (or source control of your choice), hundreds of extensions.

![](https://code.visualstudio.com/home/home-screenshot-win-lg.png)

## Setup

Follow these instructions to setup your machine and edit your programs in Visual Studio Code.

* install [Visual Studio Code](https://code.visualstudio.com/)
* install [Node.JS](https://nodejs.org/en/)
* install the PXT Tools (on Mac or Linux, you might have to add ``sudo`` to the command).
```
pxt install -g pxt
```
* create a folder for your projects
```
mkdir microbit
```
* install the microbit target
```
pxt target microbit
```

That's it! You are ready to create new projects in code or open existing projects.

## Creating a new project

Open a shell to your ``microbit`` folder.

```
# create a new subfolder for your project
mkdir myproject
cd myproject
# start the project set
pxt init
# open code
code . 
```

## Opening an existing project 

You can extract a project from the embedded URL or .hex file. Open a shell to your projects folder

```
# extract the project from the URL
pxt extract EMBEDURL
```
where ``EMBEDURL`` is the published project URL.