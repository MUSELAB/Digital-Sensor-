// tests go here; this will not be compiled when this package is used as an extension.

basic.forever(function () {
    basic.pause(1000)
    
    //basic.showString(Digital_Sensor.Get_RS485_DATA(0x01,0x03,0x00,0x01,0x00,0x02,0x95,0xCB))
    basic.showString(Digital_Sensor.test("01030001000295CB"))

})

