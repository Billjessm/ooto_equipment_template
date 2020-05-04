import { IPlugin, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { bus } from 'modloader64_api/EventHandler';
import path from 'path';
import { OotOnlineEvents } from './OotoAPI/OotoAPI';

class zzmatrixdata {
    ADULT_MATRIX_SWORD_BACK!: number[];
    ADULT_MATRIX_SHIELD_BACK!: number[];
    CHILD_MATRIX_SWORD_BACK!: number[];
    CHILD_MATRIX_SHIELD_BACK!: number[];
    CHILD_MATRIX_ITEM_SHIELD!: number[];
}

class zzmetadata {
    file!: string;
    desc!: string;
    matrices!: zzmatrixdata;
}

class zzequipment implements IPlugin {

    ModLoader!: IModLoaderAPI;
    pluginName?: string | undefined;

    preinit(): void {
    }
    init(): void {
        let zz: zzmetadata = (this as any)['metadata']['zzequipment'];
        bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_EQUIPMENT, { zobj: path.resolve(path.join(__dirname, zz.file)), txt: path.resolve(path.join(__dirname, zz.desc)) });
        if (zz.matrices.ADULT_MATRIX_SHIELD_BACK.length > 0) {
            bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_ADULT_MATRIX_SHIELD_BACK, zz.matrices.ADULT_MATRIX_SHIELD_BACK);
        }
        if (zz.matrices.ADULT_MATRIX_SWORD_BACK.length > 0) {
            bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_ADULT_MATRIX_SWORD_BACK, zz.matrices.ADULT_MATRIX_SWORD_BACK);
        }
        if (zz.matrices.CHILD_MATRIX_ITEM_SHIELD.length > 0) {
            bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_CHILD_MATRIX_ITEM_SHIELD, zz.matrices.CHILD_MATRIX_ITEM_SHIELD);
        }
        if (zz.matrices.CHILD_MATRIX_SHIELD_BACK.length > 0) {
            bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_CHILD_MATRIX_SHIELD_BACK, zz.matrices.CHILD_MATRIX_SHIELD_BACK);
        }
        if (zz.matrices.CHILD_MATRIX_SWORD_BACK.length > 0) {
            bus.emit(OotOnlineEvents.CUSTOM_MODEL_APPLIED_CHILD_MATRIX_SWORD_BACK, zz.matrices.CHILD_MATRIX_SWORD_BACK);
        }
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
    }

}

module.exports = zzequipment;