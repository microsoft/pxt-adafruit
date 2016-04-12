/**
* Runtime and event utilities.
*/
//% weight=1 color="#333333"
namespace control {

    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=19 weight=19 blockId="control_event_source" block="%id"
    export function eventSource(id: EventBusSource) : number {
        return id;
    }
    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=19 weight=19 blockId="control_event_value" block="%id"
    export function eventValue(id: EventBusValue) : number {
        return id;
    }

    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxrt::panic
    export function panic(code:number)
    {
    }

    /**
     * If the condition is false, display msg on serial console, and panic with code 098.
     */
    export function assert(condition:boolean, msg?: string)
    {
        if (!condition) {
            console.log("ASSERTION FAILED")
            if (msg != null)
                console.log(msg)
            panic(98)
        }
    }
}
