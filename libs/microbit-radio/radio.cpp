#include "pxt.h"

using namespace pxt;

#define RADIO_VALUE_PACKET_TYPE 24641622

//% color=270 weight=34
namespace radio {

    // -------------------------------------------------------------------------
    // Radio
    // -------------------------------------------------------------------------    
    bool radioEnabled = false;
    PacketBuffer packet;
    
    int radioEnable() {
        int r = uBit.radio.enable();
        if (r != MICROBIT_OK) {
            uBit.panic(43);
            return r;
        }
        if (!radioEnabled) {
            uBit.radio.setGroup(pxt::programHash());
            radioEnabled = true;
        }
        return r;
    }

    void broadcastMessage(int message) {
        if (radioEnable() != MICROBIT_OK) return;
        uBit.radio.event.eventReceived(MicroBitEvent(MES_BROADCAST_GENERAL_ID, message, CREATE_ONLY));
    }
        
    void onBroadcastMessageReceived(int message, Action f) {
        if (radioEnable() != MICROBIT_OK) return;
        registerWithDal(MES_BROADCAST_GENERAL_ID, message, f);
    }


    /**
     * Broadcasts 4 numbers over radio to any connected micro:bit in the group.
     */
    //% help=radio/send-numbers
    //% weight=59
    //% blockId=radio_datagram_send_numbers block="send numbers|0: %VALUE0|1: %VALUE1|2: %VALUE2|3: %VALUE3"
    void sendNumbers(int value_0, int value_1, int value_2, int value_3) {
        if (radioEnable() != MICROBIT_OK) return;
        int buf[] = { value_0, value_1, value_2, value_3 };
        uBit.radio.datagram.send((uint8_t*)buf, 4*sizeof(int));
    }
    
    /**
    * Broadcasts a name / value pair along with the device serial number
    * and running time to any connected BBC micro:bit in the group.
    * @param name the field name (max 12 characters), eg: "data"
    * @param the numberic value
    */
    //% help=radio/stream-value
    //% weight=15
    //% blockId=radio_datagram_stream_value block="stream|value %name|= %value"
    void streamValue(StringData* name, int number) {
        if (radioEnable() != MICROBIT_OK) return;

        ManagedString n(name);                
        uint8_t buf[32];
        uint32_t* buf32 = (uint32_t*)buf;
        memset(buf, 32, 0);
        buf32[0] = number;                      // 4 bytes: value
        buf32[1] = microbit_serial_number();    // 4 bytes: serial number
        buf32[2] = system_timer_current_time(); // 4 bytes: running time
        memcpy(buf + 12, n.toCharArray(), min(12, n.length())); // 12-24: field name       
        buf32[7] = RADIO_VALUE_PACKET_TYPE; // last 4 bytes: magic number of package type
        uBit.radio.datagram.send(buf, 32);
    }
    
    /**
    * Reads a value sent with `stream value` and writes it
    * to the serial stream as JSON
    */
    //% help=radio/read-value-to-serial
    //% weight=14
    void readValueToSerial() {
        if (radioEnable() != MICROBIT_OK) return;
        PacketBuffer p = uBit.radio.datagram.recv();
        uint8_t* bytes = packet.getBytes();
        int type;
        memcpy(&type, bytes + 28, 4);
        if (type != RADIO_VALUE_PACKET_TYPE) return;
        
        int value;
        int serial;
        int time;
        char name[12+1]; name[12] = 0;
        memcpy(&value, bytes, 4);
        memcpy(&serial, bytes + 4, 4);
        memcpy(&time, bytes + 8, 4);
        memcpy(&name, bytes + 12, 12);
            
        uBit.serial.send("{s:"); uBit.serial.send(serial);
        uBit.serial.send(",t:"); uBit.serial.send(time);
        uBit.serial.send(",v:"); uBit.serial.send(value);
        uBit.serial.send(",n:\""); uBit.serial.send(name);
        uBit.serial.send("\"}\r\n");
    }

    /**
     * Registers code to run when a packet is received over radio.
     */
    //% help=radio/on-data-received
    //% weight=50
    //% blockId=radio_datagram_received_event block="on data received" blockGap=8
    void onDataReceived(Action body) {
        if (radioEnable() != MICROBIT_OK) return;
        registerWithDal(MICROBIT_ID_RADIO, MICROBIT_RADIO_EVT_DATAGRAM, body);    
    }

    /**
     * Reads a number at a given index, between ``0`` and ``3``, from the packet received by ``receive number``. Not supported in simulator.
     * @param index index of the number to read from 0 to 3. 1 eg
     */
    //% help=radio/received-number-at
    //% weight=45
    //% blockId=radio_datagram_received_number_at block="receive number|at %VALUE" blockGap=8
    int receivedNumberAt(int index) {
        if (radioEnable() != MICROBIT_OK) return 0;
        if (0 <= index && index < packet.length() / 4) {
            // packet.getBytes() is not aligned
            int r;
            memcpy(&r, packet.getBytes() + index * 4, 4);
            return r;
        }
        return 0;
    }

    /**
     * Reads the next packet as a number from the radio queue.
     */
    //% help=radio/receive-number
    //% weight=46
    //% blockId=radio_datagram_receive block="receive number" blockGap=8
    int receiveNumber()
    {
        if (radioEnable() != MICROBIT_OK) return 0;
        packet = uBit.radio.datagram.recv();
        return receivedNumberAt(0);
    }

    /**
     * Gets the received signal strength indicator (RSSI) from the packet received by ``receive number``. Not supported in simulator.
     * namespace=radio
     */
    //% help=radio/received-signal-strength
    //% weight=40
    //% blockId=radio_datagram_rssi block="received signal strength"
    int receivedSignalStrength() {
        if (radioEnable() != MICROBIT_OK) return 0;
        return packet.getRSSI();
    }

    /**
     * Sets the group id for radio communications. A micro:bit can only listen to one group ID at any time.
     * @ param id the group id between ``0`` and ``255``, 1 eg
     */
    //% help=radio/set-group
    //% weight=10
    //% blockId=radio_set_group block="set group %ID"
    void setGroup(int id) {
        if (radioEnable() != MICROBIT_OK) return;
        uBit.radio.setGroup(id);
    }
    
    /**
     * Change the output power level of the transmitter to the given value.
    * @param power a value in the range 0..7, where 0 is the lowest power and 7 is the highest, 7 eg
    */
    //% help=radio/set-transmit-power
    //% weight=9
    //% blockId=radio_set_transmit_power block="set transmit power %power"
    void setTransmitPower(int power) {
        if (radioEnable() != MICROBIT_OK) return;
        uBit.radio.setTransmitPower(power);
    }
}
