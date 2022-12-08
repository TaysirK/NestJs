import { Global, Module } from '@nestjs/common';
import { uuid } from 'uuidv4';
const UIID_Provider = {
    provide: 'UUID_function',
    useValue: [{ uuidfunction : uuid }],
    }
@Global()
@Module({
    providers: [UIID_Provider],
    exports: [UIID_Provider]
})
@Module({})

export class CommonModuleModule {}