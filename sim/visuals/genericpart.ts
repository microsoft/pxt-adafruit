
namespace pxsim.visuals {
    export class GenericComponentView implements IBoardComponent<any> {
        public style: string;
        public element: SVGElement;
        defs: SVGElement[];
        init(bus: EventBus, state: any, svgEl: SVGSVGElement, gpioPins: string[], otherArgs: string[]): void {
        }
        moveToCoord(xy: Coord): void {
        }
        updateState(): void {
        }
        updateTheme(): void {
        }
    }
}