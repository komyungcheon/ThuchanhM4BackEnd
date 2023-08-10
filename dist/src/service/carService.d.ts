declare class CarService {
    private carRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    save: (data: any) => Promise<any>;
}
declare const _default: CarService;
export default _default;
