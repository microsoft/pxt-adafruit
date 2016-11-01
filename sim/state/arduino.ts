
namespace pxsim.arduino {
    export function map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
        return (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
    }

    export function pinMode(pin: number, mode: number): void {
        
    }
}
