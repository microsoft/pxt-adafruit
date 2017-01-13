
namespace pxsim.pxtcore {
    export function registerWithDal(id: number, evid: number, handler: RefAction) {
        board().bus.listen(id, evid, handler);
    }
    export function getPin(id: number) : pxsim.Pin {
        return board().edgeConnectorState.getPin(id);
    }
}
