//% weight=100 color="#F59E20" icon="\uf0c3"
namespace Digital_Sensor{

    function Convert_string(reg:number):string {
        let a1= ""
        switch(reg){ 
             case 0 : a1="0";break;
             case 1 : a1="1";break;
             case 2 : a1="2";break;
             case 3 : a1="3";break;
             case 4 : a1="4";break;
             case 5 : a1="5";break;
             case 6 : a1="6";break;
             case 7 : a1="7";break;
             case 8 : a1="8";break;
             case 9 : a1="9";break;
             case 10 :a1="A";break;
             case 11 :a1="B";break;
             case 12 :a1="C";break;
             case 13 :a1="D";break;
             case 14 :a1="E";break;
             case 15 :a1="F";break;
             default:    break;
        }
        return a1
    }
    function Convert_number(reg:string):number {
        let a1
        switch(reg){ 
             case "0" : a1=0;break;
             case "1" : a1=1;break;
             case "2" : a1=2;break;
             case "3" : a1=3;break;
             case "4" : a1=4;break;
             case "5" : a1=5;break;
             case "6" : a1=6;break;
             case "7" : a1=7;break;
             case "8" : a1=8;break;
             case "9" : a1=9;break;
             case "A" :a1=10;break;
             case "B" :a1=11;break;
             case "C" :a1=12;break;
             case "D" :a1=13;break;
             case "E" :a1=14;break;
             case "F" :a1=15;break;
             default:    break;
        }
        return a1
    }
    function change(DATA:string):string{ 
         let tb = pins.createBuffer(8)//Define IIC send data buffer
         let ta = pins.createBuffer(9)
         let b1 = DATA
         let tc=[]
         tb[0] =Convert_number(b1.substr(0,1))*16 + Convert_number(b1.substr(1,1))
         tb[1] =Convert_number(b1.substr(2,1))*16 + Convert_number(b1.substr(3,1))
         tb[2] =Convert_number(b1.substr(4,1))*16 + Convert_number(b1.substr(5,1))
         tb[3] =Convert_number(b1.substr(6,1))*16 + Convert_number(b1.substr(7,1))
         tb[4] =Convert_number(b1.substr(8,1))*16 + Convert_number(b1.substr(9,1))
         tb[5] =Convert_number(b1.substr(10,1))*16 + Convert_number(b1.substr(11,1))
         tb[6] =Convert_number(b1.substr(12,1))*16 + Convert_number(b1.substr(13,1))
         tb[7] =Convert_number(b1.substr(14,1))*16 + Convert_number(b1.substr(15,1))
        
         pins.i2cWriteBuffer(0X01, tb);
         ta = pins.i2cReadBuffer(0X01, 9);
         tc[0] = ta[0]
         tc[1] = ta[1]
         tc[2] = ta[2]
         tc[3] = ta[3]
         tc[4] = ta[4]
         tc[5] = ta[5]
         tc[6] = ta[6]
         tc[7] = ta[7]
         tc[8] = ta[8]
         tc[9] = ta[9]
         
         let a1= ""
         let a2= ""
         let a3= ""
         let a4 = ""
         let a5= ""
         let a6= ""
         let a7= ""
         let a8= ""
         let a9 = ""
         
         a1 = Convert_string(Math.floor(tc[0]/16))+Convert_string(tc[0]%16)
         a2 = Convert_string(Math.floor(tc[1]/16))+Convert_string(tc[1]%16)
         a3 = Convert_string(Math.floor(tc[2]/16))+Convert_string(tc[2]%16)
         a4 = Convert_string(Math.floor(tc[3]/16))+Convert_string(tc[3]%16)
         a5 = Convert_string(Math.floor(tc[4]/16))+Convert_string(tc[4]%16)
         a6 = Convert_string(Math.floor(tc[5]/16))+Convert_string(tc[5]%16)
         a7 = Convert_string(Math.floor(tc[6]/16))+Convert_string(tc[6]%16)
         a8 = Convert_string(Math.floor(tc[7]/16))+Convert_string(tc[7]%16)
         a9 = Convert_string(Math.floor(tc[8]/16))+Convert_string(tc[8]%16)
         
         let re = a1.concat(a2.concat(a3.concat(a4.concat(a5.concat(a6.concat(a7.concat(a8.concat(a9))))))))
         return re
       
    }

    function ouput1(s1: number ,s2:number,s3:number,s4:number,s5:number,s6:number,s7:number,s8:number): string {
                let tb = pins.createBuffer(8)//Define IIC send data buffer
                let ta = pins.createBuffer(9)//Define IIC accept data buffer
                let tc=[]                  
                tb[0] = s1
                tb[1] = s2
                tb[2] = s3
                tb[3] = s4
                tb[4] = s5
                tb[5] = s6
                tb[6] = s7
                tb[7] = s8         
                
                pins.i2cWriteBuffer(0X01, tb);
                ta = pins.i2cReadBuffer(0X01, 9);
                tc[0] = ta[0]
                tc[1] = ta[1]
                tc[2] = ta[2]
                tc[3] = ta[3]
                tc[4] = ta[4]
                tc[5] = ta[5]
                tc[6] = ta[6]
                tc[7] = ta[7]
                tc[8] = ta[8]
                tc[9] = ta[9]
        
                let a1= ""
                let a2= ""
                let a3= ""
                let a4 = ""
                let a5= ""
                let a6= ""
                let a7= ""
                let a8= ""
                let a9 = ""
        
                a1 = Convert_string(Math.floor(tc[0]/16))+Convert_string(tc[0]%16)
                a2 = Convert_string(Math.floor(tc[1]/16))+Convert_string(tc[1]%16)
                a3 = Convert_string(Math.floor(tc[2]/16))+Convert_string(tc[2]%16)
                a4 = Convert_string(Math.floor(tc[3]/16))+Convert_string(tc[3]%16)
                a5 = Convert_string(Math.floor(tc[4]/16))+Convert_string(tc[4]%16)
                a6 = Convert_string(Math.floor(tc[5]/16))+Convert_string(tc[5]%16)
                a7 = Convert_string(Math.floor(tc[6]/16))+Convert_string(tc[6]%16)
                a8 = Convert_string(Math.floor(tc[7]/16))+Convert_string(tc[7]%16)
                a9 = Convert_string(Math.floor(tc[8]/16))+Convert_string(tc[8]%16)
        
                let re = a1.concat(a2.concat(a3.concat(a4.concat(a5.concat(a6.concat(a7.concat(a8.concat(a9))))))))
                return re
            }
         /**
        * get PH_value from sensor
        */
       //%blockId=Get_RS485_DATA
       //% block="Get_RS485_DATA s1 %s1|s2 %s2|s3 %s3|s4 %s4|s5 %s5|s6 %s6|s7 %s7|s8 %s8"
       
       //% u.defl=Get_RS485_DATA
       //% weight=120	
       //% blockGap=8
       export function Get_RS485_DATA(s1: number ,s2:number,s3:number,s4:number,s5:number,s6:number,s7:number,s8:number): string {
           
            return ouput1(s1,s2,s3,s4,s5,s6,s7,s8)
       }
         /**
     * PH mudule
     **/
    /**
     * TODO：get PH value
     * @param temppin describe parameter here, eg: AnalogPin.P0
     **/
      //% blockId="readphtemp" block="get PH value at pin %temppin"
      export function Get_Ph(temppin: AnalogPin): number {
        let voltage = 0;
        let phvlaue = 0;
        
        voltage = pins.analogReadPin(temppin);
        voltage = voltage*3.3/1024;
        phvlaue= 3.52*voltage-1.7688;
        return phvlaue
      }
      /**
        * get PH_value from sensor
        */
       //%blockId=test
       //% block="test DATA %DATA"
       
       //% u.defl=test
       //% weight=120	
       //% blockGap=8
    export function Get_RS485_DATA_V1(DATA:string): string { 
       return change(DATA)
    }

}