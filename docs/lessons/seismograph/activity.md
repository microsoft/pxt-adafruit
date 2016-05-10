# Seismograph Activity 

Welcome! In this project, you will build your own seismograph. This activity will teach how to use the micro:bit to chart the strength of the acceleration. Let's get started! Project duration: 25 minutes.

### ~avatar avatar

Engineering: In this project, you will build your own seismograph micro:bit from tape and a household plate. 

### ~

## What you'll need: 

* micro:bit 
* USB cable
* Plate 
* Tape 
* Scissors

## 1. 

Prepare Tape: Measure and cut approximately 10mm of tape. The tape will be fastened to a micro USB cable.  

![](/static/mb/lessons/seismograph1.png)

## 2. 

Fasten Tape: Fasten tape to the micro USB cable and to the plate. Attach the micro:bit to the micro:bit USB cable. 

![](/static/mb/lessons/seismograph0.png)

### ~avatar avatar

Computer Science: The seismograph has been built. We are ready to program the micro:bit to be a seismograph! 

### ~

## 1. 

Go to Codemicrobit.com

* Click or tap New Project
* Click or tap Blocks
    
## 2. 

We will measure `acceleration (mg)` in terms of strength or Magnitude. Get the acceleration value (milli g-force), as measured in strength or Magnitude.

```blocks
input.acceleration(Dimension.Strength);
```

## 3. 

Use the plot bar chart to visualize the acceleration on the LED screen of the micro:bit in the specified range. You implement forever and plot Bar Graph to constantly display a vertical bar graph, which will be based on the "value" and "high" value. Then measure the acceleration based on the strength or Magnitude. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength), 0);
});

```

## 4. 

Finally, we subtract the gravity from acceleration strength. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength) - 1023, 0);
});

```

### ~

### ~avatar avatar

Science: We now need to use the micro:bit to chart the strength of the acceleration.

### ~


## 1. 

First, notice that making moving the micro:bit simulator in any direction will change the values from a flat horizontal line to a waving line to display the value of the strength as measured in milli-gravities. Next, notice that by moving the micro:bit simulator below, there is a changing acceleration value. Finally, notice that the LED display will fluctate based on the movement of the micro:bit simulator. 

![](/static/mb/data4.png)

## 2. 
 
Vigorously move the micro:bit in the micro:bit simulatator by moving the micro:bit image from side to side. Every time the micro:bit moves in any direction in the simulator,  you are generating data points that can be reviewed in Excel. The more attempts to move the micro:bit from side to side, the more data being saved in Excel. After you have vigarously moved the micro:bit simulator from side to side for a sufficient amount of time, you are ready to graph or chart the accceleration of the micro:bit. We want a printout of our acceleration on Excel that can be graphed in Excel. 


### ~

## 3. 

* Connect a micro:bit to your computer using your USB cable

![](/static/mb/lessons/seismograph3.png)

* Press compile button for the seismograph program to run on the micro:bit. 

![](/static/mb/lessons/seismograph4.png)

The flat, black colored line should appear that measures acceleration of the micro:bit. The black line should appear directly beneath the flat, colored line that measures acceleration of the micro:bit simulator. 

![](/static/mb/lessons/seismograph6.png)

Run the acceleration experiment by moving the actual micro:bit and observe the changes in the black line.  
First, notice that by moving the actual micro:bit in any direction, you will change the values of the black, flat horizontal line. The black line will change from being flat to being a waving black line. The changing values of the micro:bit accelereration is being measured in milli-gravities. Next, notice that by moving the micro:bit  below, there is a changing acceleration value. Finally, notice that the LED display will fluctate based on the movement of the micro:bit. 

## 4. 

We want to chart the data collected by using a tool in Excel. 

The final part of this experiment is opening and reviewing the data in the Excel CSV file. Simply click on the line charts area beneath the simulator. A CSV file will be generated to display the data points collected by the micro:bit. Click or tap on the data Excel file that was downloaded to your local Downloads Folder. 

First, click or tap on the first two columns (A, B) to  include the time of the data being collected; b) the results of acceleration data on the micro:bit  

![](/static/mb/data7.png)


## 5. 

![](/static/mb/chart1.png)

Use the Recommended Charts command on the Insert tab to quickly create a chart that’s just right for your data.

* Select the data that you want to include in your chart.

* Click Insert > Recommended Charts.

* On the Recommended Charts tab, scroll through the list of chart types that Excel recommends for your data.

Click any chart type to see how your data will look in that format. 

When you find the chart type that you want, click it, and then click OK. We want to select the chart called Line. A line chart is used to display trends over time. We will use the line chart because there are many data points over time. 

Tip: If you don’t see a chart type that you want, click the All Charts tab to see all of the available chart types.

## 6. 

![](/static/mb/chart_title.png)

* Use the Chart Elements, Chart Styles, and Chart Filters buttons next to the upper-right corner of the chart to add chart elements like axis titles or data labels, to customize the look of your chart


## 7. 

![](/static/mb/elements_styles_filters.png)


### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/seismograph/challenge)

### ~

