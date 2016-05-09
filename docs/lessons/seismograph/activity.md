# Seismograph Activity 


### ~avatar avatar

In this project, you will build your own seismograph. 

### ~

## What you'll need: 

* micro:bit 
* USB cable
* Plate 
* Tape 
* Scissors

Welcome! This activity will teach how to use the micro:bit to chart the strength of the acceleration. Let's get started!

Step 1. Prepare Tape: Measure and cut approximately 10mm of tape. The tape will be fastened to a micro USB cable.  

![](/static/mb/lessons/seismograph0.png)


Step 2. Fasten Tape: Fasten tape to the micro USB cable and to the plate. Attach the micro:bit to the micro:bit USB. 

![](/static/mb/lessons/seismograph0.png)


### ~avatar avatar

Seismograph built, let's code! 

### ~

Step 1. Go to Codemicrobit.com

    Click or tap Create Code
    Click or tap Block Editor
    

Step 2. 

We will measure `acceleration (mg)` in terms of strength. Get the acceleration value (milli g-force), as measured in strength.

```blocks
input.acceleration(Dimension.Strength);
```

### ~

Step 3. 

Use the plot bar chart to visualize the acceleration on the LED screen of the micro:bit in the specified range. You implement plot Bar Graph to display a vertical bar graph based on the "value" and "high" value. Then you must insert acceleration in based on strength. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength), 0);
});

```

### ~

Step 4. 

Finally, we subtract the gravity from acceleration strength. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength) - 1023, 0);
});

```

### ~

Step 5. 

Notice that making moving the object below the micro:bit changes the values and the line appears as a wave to display the value of the strength as measured in milli-gravities. By making the object below the micro:bit vibrate, you will observe changing values of the micro:bit. Also, the LEDs shown on the Bar Graph fluctates based on the movement of the micro:bit strength. 

NOTE: The black color reflects the micro:bit device. 

![](/static/mb/data4.png)


### ~

Step 6. 
 
Vigorously move the micro:bit in the micro:bit simulatator by moving the micro:bit image from side to side. Every time the micro:bit moves in the x direction in the simulator,  you are generating data points that can be reviewed in Excel. The more attempts to move the micro:bit from side to side, the more data being saved in Excel. After you have vigarously moved the micro:bit simulator from side to side for a sufficient amount of time, you are ready to graph or chart the accceleration of the micro:bit. We want a printout of our acceleration on Excel that can be graphed in Excel. 


### ~

Step 7. 

We want to chart the data collected by using a tool in Excel. 

The final part of this experiment is opening and reviewing the data in the Excel CSV file. Simply click on the line beneath the simulator. A CSV file will be generated to display the data points collected by moving the micro:bit in the X direction. Then click or tap on the data Excel file that was downloaded to your local Downloads Folder. 


### ~

Step 8. 


First, click or tap on the first two columns (A, B) to  include the time of the data being collected; b) the results of acceleration data on the micro:bit  

![](/static/mb/data7.png)

Use the Recommended Charts command on the Insert tab to quickly create a chart that’s just right for your data.

* Select the data that you want to include in your chart.

* Click Insert > Recommended Charts.

### ~

Step 9. 


![](/static/mb/chart1.png)

* On the Recommended Charts tab, scroll through the list of chart types that Excel recommends for your data.

Click any chart type to see how your data will look in that format. 

When you find the chart type that you want, click it, and then click OK. We want to select the chart called Line. A line chart is used to display trends over time. We will use the line chart because there are many data points over time. 

Tip: If you don’t see a chart type that you want, click the All Charts tab to see all of the available chart types.

### ~

Step 10. 

![](/static/mb/chart_title.png)

* Use the Chart Elements, Chart Styles, and Chart Filters buttons next to the upper-right corner of the chart to add chart elements like axis titles or data labels, to customize the look of your chart

### ~

Step 11. 

![](/static/mb/elements_styles_filters.png)

* Connect a micro:bit to your computer using your USB cable; compile; and repeat this experiment by vibrating the micro:bit. Then chart the data on Excel. 

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/seismograph/challenge)

### ~

