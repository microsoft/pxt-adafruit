# Write Value To Serial

Writes the full data received data  via ``radio`` to serial in JSON format.   
**Note** - This method only works for [send number](/reference/radio/send-number) and [send value](/reference/radio/send-value). It does not work for [send string](/reference/radio/send-string) (although a string can be sent with [send value](/reference/radio/send-value)).   

## Data received format
The format for received data printed to serial is as follows    
- [send number](/reference/radio/send-number) - ```{v:ValueSent,t:MicrobitTimeAlive,s:Unused}```
- [send value](/reference/radio/send-number) - ```{v:Value,t:MicrobitTimeAlive,s:Unused,n:"Name"}```
- [send string](/reference/radio/send-string) - ```{}``` (currently unavailable)



### Simulator

This function only works on the micro:bit, not in browsers.

### Examples

When ```radio``` data is received (after pressing A button on 2nd micro:bit), output temperature data to serial.

```blocks
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(input.temperature());
});
radio.onDataReceived(() => {
    radio.writeValueToSerial();
});
```
Example output to serial when A button pressed:   
```{v:27,t:323,s:0}```

### See also

[send number](/reference/radio/send-number), [send value](/reference/radio/send-number), [on data received](/reference/radio/on-data-received)
