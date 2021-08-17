import { OrigensService } from './origens.service';
export declare class OrigensController {
    private readonly statusService;
    private readonly logger;
    constructor(statusService: OrigensService);
    consultarStatus(): Promise<import("./interfaces/origens.entity").Origens[]>;
    consultarStatusKey(_id: string): Promise<import("./interfaces/origens.entity").Origens>;
}
