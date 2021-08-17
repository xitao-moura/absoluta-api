import { StatusService } from './status.service';
export declare class StatusController {
    private readonly statusService;
    private readonly logger;
    constructor(statusService: StatusService);
    consultarStatus(): Promise<any[]>;
    consultarStatusKey(_id: string): Promise<any>;
}
