# Seismograph Activity 

Welcome! In this project, you will build your own seismograph. This activity will teach how to use the micro:bit to chart the strength of the acceleration. Let's get started! Project duration: 25 minutes.

### ~avatar avatar

Engineering: In this project, you will build your own seismograph micro:bit from tape and a household plate. 

### ~

## What you'll need: 

* BBC micro:bit 
* micro USB cable
* Plate 
* Tape 
* Scissors

![](/static/mb/lessons/seismograph11.png)

# Engineering Steps

## 1. 

Prepare Tape: Measure and cut approximately 10mm of tape. The tape will be fastened to a micro USB cable.  

![](/static/mb/lessons/seismograph1.png)

## 2. 

Fasten Tape: Fasten tape to the micro USB cable and to the plate. Attach the micro:bit to the micro:bit USB cable. 

![](/static/mb/lessons/seismograph0.png)

### ~avatar avatar

Computer Science: The seismograph has been built. We are ready to program the micro:bit to be a seismograph! 

### ~

# Programming Steps
    
## 3. 

We will measure `acceleration (mg)` in terms of strength or Magnitude.

```blocks
input.acceleration(Dimension.Strength);
```

## 4. 

Use the plot bar chart to visualize the acceleration on the LED screen. Use a forever to keep reading the acceleration value and displaying it on the screen.

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength), 0);
});

```

## 6. 

At rest, the micro:bit is always subject to Earth gravity, whose magnitude is measured around ``1023``. Substract ``1023`` to measure a data close to ``0``. 

```blocks
basic.forever(() => {
    led.plotBarGraph(input.acceleration(Dimension.Strength) - 1023, 0);
});

```

### ~

### ~avatar avatar

Data Analysis: We now need to use the micro:bit to Analyze Data and chart for the strength of the acceleration.

### ~

# Data Analysis Steps

## 7. 

First, notice that moving the micro:bit in the simulator in any direction, you will change the acceleration value, which is being displayed as the same color as the micro:bit simulator. Also, notice that by moving the micro:bit simulator, there is a changing acceleration value. Second, the flat colored horizontal line will start a waving line to display the value of the strength as measured in milli-gravities. Finally, notice that the LED display will fluctate based on the movement of the micro:bit simulator. 

![](/static/mb/lessons/analyze20.png)

## 8. 
 
Connect a micro:bit to your computer using your USB cable

![](/static/mb/lessons/seismograph33.png)

Click or tap the compile button for the seismograph program to run the program on the micro:bit. 

![](/static/mb/lessons/seismograph22.png)

## 9. 

A black line should appear directly beneath the colored line. The black line measures the micro:bit acceleration.  And the colored line measures micro:bit simulator acceleration. 

Run the acceleration experiment by vigarously moving the plate in any direction or move the object below the micro:bit (such as a table).

Every time the micro:bit moves in any direction,  you generate data points that can be reviewed in Excel later. The more attempts to move the micro:bit, the more data to be reviewed in Excel.  

![](/static/mb/lessons/seismograph5.png)

## 10. 

Please find seismogrph experiment obervations: 

First, notice that moving the micro:bit in any direction, you will change the acceleration value, which is being displayed as a milli-gravities value. By moving the micro:bit, there will be a changing acceleration value. 

![](/static/mb/lessons/seismograph7.png)

Second, the horizontal line will move to plot the value of the strength as measured in milli-gravities. The horizontal line's movement is based on the micro:bit acceleration in Magnitude or Strength. 

![](/static/mb/lessons/seismograph6.png)

Third, notice that the LED display fluctates based on the movement of the micro:bit. 

![](/static/mb/lessons/seismograph8.png)

Now we are ready to graph or chart the accceleration of the micro:bit. We want a printout of the micro:bit acceleration graphed in Excel.

## 11. 

In order to receive the the data plotted by Excel, click or tap anywhere in the on the chart data.

![](/static/mb/analyze1.png)
  
## 12. 

You have two options to Analyze Data: 

* Local File: Save the data to your local Downloads folder and open it in Excel. 
* Stream to Cloud: Upload your data to Microsoft Azure to analyze it. 

Click or tap Download data

![](/static/mb/lessons/seismograph9.png)

## 13. 

A CSV file will be generated to display the data points collected by the micro:bit. Click or tap on the data Excel file that was downloaded to your local Downloads Folder. 

![](/static/mb/lessons/analyze9.png)

## 14.

Select the data that you want to include in your chart. The chart should include the first two columns: time and acceleration. 

Click or tap on the first two columns (A, B) to include time and acceleration data from the micro:bit  


## 15.

Click or tap on Insert then select Recommended Charts. We can select a chart that’s just right for the data.

![](/static/mb/analyze3.png)

On the Recommended Charts tab, scroll through the list of chart types that Excel recommends for your data. 

We want to select the chart called Line. A line chart is used to display trends over time. We will use the line chart because there are many data points over time. 

Click on the chart type to see how your data will look in that format. When you find the chart type that you want, click it, and then click OK. 

![](/static/mb/lessons/analyze16.png)

Tip: If you don’t see the line chart, click the All Charts tab to see the line chart.

## 16. 

Use the Chart Elements, Chart Styles, and Chart Filters buttons next to the upper-right corner of the chart to add chart elements like axis titles or data labels, to customize the look of your chart

Alternatively, click or tap on the Design Ribbon. 

Let's select Style 10 as an example. 

![](/static/mb/lessons/analyze19.png)

### ~avatar avatar

Excellent, you're ready to continue with the [challenges](/lessons/seismograph/challenge)

### ~

