# Eddystone

Support for Eddystone beacons.

```cards
eddystone.advertiseUrl("https://pxt.io/", 6);
eddystone.stopAdvertising();
```

### Advanced

Bluetooth beacons are used to indicate proximity to a place or object of interest. 
Beacons use Bluetooth advertising to broadcast a small amount of data, which can be received and acted upon by anyone in range 
with a suitable device and software, typically a smartphone and application.

There are various beacon message formats, which define the way Bluetooth advertising packets are used as containers for beacon data. 
iBeacon is Apple's beacon message format. Eddystone comes from Google.

More information at https://lancaster-university.github.io/microbit-docs/ble/eddystone/

### See Also

[eddystone.advertiseUrl](/reference/eddystone/advertise-url),
[eddystone.stopAdvertising](/reference/eddystone/stop-advertising),

```package
eddystone
```
