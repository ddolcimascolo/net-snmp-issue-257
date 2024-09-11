import snmp from 'net-snmp';

const store = snmp.createModuleStore();

store.loadFromFile('./mibs/iDRAC/RFC-1215.mib');
store.loadFromFile('./mibs/iDRAC/INET-ADDRESS-MIB.mib');
store.loadFromFile('./mibs/iDRAC/10892.mib');
store.loadFromFile('./mibs/iDRAC/adptinfo.mib');
store.loadFromFile('./mibs/iDRAC/baspCfg.mib');
store.loadFromFile('./mibs/iDRAC/baspStat.mib');
store.loadFromFile('./mibs/iDRAC/baspTrap.mib');
store.loadFromFile('./mibs/iDRAC/dcs3fru.mib');
store.loadFromFile('./mibs/iDRAC/dcs3rmt.mib');
store.loadFromFile('./mibs/iDRAC/dcstorag.mib');
store.loadFromFile('./mibs/iDRAC/dellcm.mib');
store.loadFromFile('./mibs/iDRAC/dellrac.mib');
store.loadFromFile('./mibs/iDRAC/iDRAC-SMIv2.mib');
store.loadFromFile('./mibs/iDRAC/INTELLAN.mib');
store.loadFromFile('./mibs/iDRAC/OME.mib');
store.loadFromFile('./mibs/iDRAC/qlaspCfg.mib');
store.loadFromFile('./mibs/iDRAC/qlaspStat.mib');
store.loadFromFile('./mibs/iDRAC/qlaspTrap.mib');
store.loadFromFile('./mibs/iDRAC/qlgcadptinfo.mib');

store.loadFromFile('./mibs/iDRAC/DcAsfSrv.mib'); // Failing one
