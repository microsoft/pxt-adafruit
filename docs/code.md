# Visual Studio Code

Visual Studio Code is a Free Open Source code editor. Edit your programs with  

![](https://code.visualstudio.com/home/home-screenshot-win-lg.png)

## Tools setup

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

Open a shell to your projects folder.

```
# create a new subfolder for your project
mkdir myproject
# start the project set
pxt init
# open code
code. 
```

## Opening an existing project 

You can extract a project from the embedded URL. Open a shell to your projects folder

```
# extract the project from the URL
pxt extract EMBEDURL
```
where ``EMBEDURL`` is the published project URL.