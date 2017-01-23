## Sensors

The @boardname@ has many built in sensors. 

Let's try out some of these sensors. 

Let's use the previous example as a starting point:

```blocks
while (true) {
    if (sensors.button(Button.Left)) {
        light.redLED(true)
    } else {
        light.redLED(false)
    }
}
```

Replace the [button pressed?](/reference/sensors/button-pressed) block with the [slide switch](/reference/sensors/slide-switch) block from the **Sensors** drawer. 

Try this a few times with some of the other sensors in the **Sensors** drawer. 

#### ~hint

For some of the sensors, including the light and sound sensors. We have a special way of simulating these in the simulator. 

When you add these sensor blocks into your workspace, a slider for the respective sensor will appear in the simulator allowing you to adjust that sensor's input value.

#### ~

### ~button /projects
NEXT: PROJECTS
### ~