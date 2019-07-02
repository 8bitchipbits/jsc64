console.dir($('#jsc64Container').jsc64GetInstance()._mem.write=[1025,23])
console.table($('#jsc64Container').jsc64GetInstance().romBasic);
console.table($('#jsc64Container').jsc64GetInstance().writeBytes=['12345678',0x0801,7]);

//Direct ram manipulation!
console.dir($('#jsc64Container').jsc64GetInstance()._mem.ram[1024]=42);
