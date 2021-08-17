import { StatusService } from './status.service';
export declare class StatusController {
    private readonly statusService;
    private readonly logger;
    constructor(statusService: StatusService);
    consultarStatus(): Promise<import("./interfaces/status.entity").Status[]>;
    consultarStatusKey(_id: string): Promise<import("./interfaces/status.entity").Status>;
}
