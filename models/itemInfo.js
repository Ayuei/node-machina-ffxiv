const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.containerSequence = MachinaModels.getUint32(struct.data, 0x00);
    struct.unknown = MachinaModels.getUint32(struct.data, 0x04);
    struct.containerId = MachinaModels.getUint16(struct.data, 0x08);
    struct.slot = MachinaModels.getUint16(struct.data, 0x0A);
    struct.quantity = MachinaModels.getUint32(struct.data, 0x0C);
    struct.catalogId = MachinaModels.getUint32(struct.data, 0x10);
    struct.reservedFlag = MachinaModels.getUint32(struct.data, 0x14);
    struct.signatureId = MachinaModels.getUint32(struct.data, 0x18);
    struct.hqFlag = struct.data[0x20];
    struct.unknown2 = struct.data[0x21];
    struct.condition = MachinaModels.getUint16(struct.data, 0x22);
    struct.spiritBond = MachinaModels.getUint16(struct.data, 0x22);
    struct.stain = MachinaModels.getUint16(struct.data, 0x22);
    struct.glamourCatalogId = MachinaModels.getUint32(struct.data, 0x24);
    struct.materia1 = MachinaModels.getUint16(struct.data, 0x28);
    struct.materia2 = MachinaModels.getUint16(struct.data, 0x2A);
    struct.materia3 = MachinaModels.getUint16(struct.data, 0x2C);
    struct.materia4 = MachinaModels.getUint16(struct.data, 0x30);
    struct.materia5 = MachinaModels.getUint16(struct.data, 0x32);
};
