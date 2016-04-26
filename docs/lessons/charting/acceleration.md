# Charting Acceleration: Activity 

Measure the acceleration on the micro:bit in the "x" direction. 

### ~avatar avatar

Welcome! This activity will teach how to use the micro:bit to chart the acceleration in the "x" direction. Let's get started!


### ~
Let's measure `acceleration (mg)` in the "x" direction. Get the acceleration value (milli g-force), in one of three specified dimensions.


```blocks
input.acceleration(Dimension.X)

```

### ~
Use the plot bar chart to visualize the acceleration on the LED screen of the micro:bit in the specified range. You implement plot Bar Graph to display a vertical bar graph based on the "value" and "high" value. Then you must insert acceleration in the X dimension to measure the acceleration. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.X), 0)
})

```

### ~
Notice that moving the micro:bit in the simulator from left to right (x direction) changes the values beneath the micro:bit in a range from 1023 to -1023 as measured in milli-gravities. By hovering over the micro:bit from left to right, you can observe changing values beneath the micro:bit simulator. Also, the LEDs shown on the Bar Graph fluctates based on the movement of the micro:bit simulator in the x direction. The line underneath the micro:bit simulator reflect the acceleration in the x direction. 

NOTE: The colors of the charts reflect the color of the micro:bit simulator. In this instance, the micro:bit is yellow. So the color of the data line reflects the color of the micro:bit

![](/static/mb/data4.png)

### ~
 
Vigorously move the micro:bit in the micro:bit simulatator by moving the micro:bit image from side to side. Every time the micro:bit moves in the x direction in the simulator,  you are generating data points that can be reviewed in Excel. The more attempts to move the micro:bit from side to side, the more data being saved in Excel. After you have vigarously moved the micro:bit simulator from side to side for a sufficient amount of time, you are ready to graph or chart the accceleration of the micro:bit. We want a printout of our acceleration on Excel that can be graphed in Excel. 

### ~

Review and write down your observations from the Excel data. Then chart or graph the data collected by using a tool in Excel. 

The final part of this experiment is opening and reviewing the data in the Excel CSV file. Simply click on the line beneath the simulator. A CSV file will be generated to display the data points collected by moving the micro:bit in the X direction. Then click or tap on the data Excel file that was downloaded to your local Downloads Folder. 


### ~


First, click or tap on the first two columns (A, B) to  include the time of the data being collected; b) the results of acceleration data on the micro:bit  

![](/static/mb/data7.jpg)

Then click or tap on Recommended Charts

![](/static/mb/chart1.png)

Finally, click or tap on the option called Line, then click OK. A line chart is used to display trends over time. We will use the line chart because there are many data points over time. 

![](/static/mb/chart_title.png)

* Connect a micro:bit to your computer using your USB cable; compile; and repeat this experiment by moving the micro:bit in the "x" direction. Then collect and chart the data on Excel. 
* Review and analyze the actual micro:bit device data on Excel

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/charting/acceleration-challenge)

### ~

