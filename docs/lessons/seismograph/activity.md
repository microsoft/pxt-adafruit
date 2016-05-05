# Seismograph Activity 

### ~avatar avatar

In this project, you will build your own seismograph. 

## What you'll need: 

* micro:bit 
* USB cable
* String
* Magnet
* Plastic Cup 
* Paper Plate
* Ruler and pen
* Scissors
* *Optional: Glue gun*  

Welcome! This activity will teach how to use the micro:bit to chart the strength of the acceleration. Let's get started!

1. Using the ruler and pen, identify and mark the center point on the lid. Don’t worry if you don’t get it quite right, we’ll tidy things up later on.

2. Setup Cup: Use scissors to create a large square shaped window of the cup. The square sized hole will be placed at the lid side of the cup. 

3. Fasten Magnet: Cut a string Fasten end of the string to the magnet with glue

4. Secure String: Fasten string to base of the cup and hang the remaining string outside the base of the cup. 

5. Attach Plate: Tape the plate to the 

### ~avatar avatar

Seismograph built, let's code! 

### ~

4. Go to Codemicrobit.com

    Click or tap Create Code
    Click or tap Block Editor
    
### ~

5. 

We will measure `acceleration (mg)` in terms of strength. Get the acceleration value (milli g-force), as measured in strength.

```blocks
input.acceleration(Dimension.Strength);
```

### ~

6. 

Use the plot bar chart to visualize the acceleration on the LED screen of the micro:bit in the specified range. You implement plot Bar Graph to display a vertical bar graph based on the "value" and "high" value. Then you must insert acceleration in based on strength. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength), 0);
});

```

### ~

7. 

Finally, we subtract the gravity from acceleration strength. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength) - 1023, 0);
});

```

### ~

8. 

Notice that making vibrating the object below the micro:bit changes the values and the line appears as a wave to display the value of the strength as measured in milli-gravities. By making the object below the micro:bit vibrate, you will observe changing values of the micro:bit. Also, the LEDs shown on the Bar Graph fluctates based on the movement of the micro:bit strength. 

NOTE: The black color reflects the micro:bit device. 

![](/static/mb/data4.png)


### ~

9. 
 
Vigorously move the micro:bit in the micro:bit simulatator by moving the micro:bit image from side to side. Every time the micro:bit moves in the x direction in the simulator,  you are generating data points that can be reviewed in Excel. The more attempts to move the micro:bit from side to side, the more data being saved in Excel. After you have vigarously moved the micro:bit simulator from side to side for a sufficient amount of time, you are ready to graph or chart the accceleration of the micro:bit. We want a printout of our acceleration on Excel that can be graphed in Excel. 


### ~

10. 

We want to chart the data collected by using a tool in Excel. 

The final part of this experiment is opening and reviewing the data in the Excel CSV file. Simply click on the line beneath the simulator. A CSV file will be generated to display the data points collected by moving the micro:bit in the X direction. Then click or tap on the data Excel file that was downloaded to your local Downloads Folder. 


### ~

10. 


First, click or tap on the first two columns (A, B) to  include the time of the data being collected; b) the results of acceleration data on the micro:bit  

![](/static/mb/data7.png)

Use the Recommended Charts command on the Insert tab to quickly create a chart that’s just right for your data.

* Select the data that you want to include in your chart.

* Click Insert > Recommended Charts.

### ~

11. 


![](/static/mb/chart1.png)

* On the Recommended Charts tab, scroll through the list of chart types that Excel recommends for your data.

Click any chart type to see how your data will look in that format. 

When you find the chart type that you want, click it, and then click OK. We want to select the chart called Line. A line chart is used to display trends over time. We will use the line chart because there are many data points over time. 

Tip: If you don’t see a chart type that you want, click the All Charts tab to see all of the available chart types.

### ~

12. 

![](/static/mb/chart_title.png)

* Use the Chart Elements, Chart Styles, and Chart Filters buttons next to the upper-right corner of the chart to add chart elements like axis titles or data labels, to customize the look of your chart

### ~

13. 

![](/static/mb/elements_styles_filters.png)

* Connect a micro:bit to your computer using your USB cable; compile; and repeat this experiment by vibrating the micro:bit. Then chart the data on Excel. 

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/seismograph/challenge)

### ~

