import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class DaatabaseService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
