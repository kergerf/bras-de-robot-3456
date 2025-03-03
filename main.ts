radio.onReceivedNumber(function (receivedNumber) {
    Variable1 = receivedNumber
})
let Variable1 = 0
radio.setGroup(1)
basic.forever(function () {
    if (Variable1 == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 25)
        basic.pause(100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        Variable1 = 0
    }
    if (Variable1 == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -25)
        basic.pause(100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
        Variable1 = 0
    }
    if (Variable1 == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -15)
        basic.pause(250)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        Variable1 = 0
    }
    if (Variable1 == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 15)
        basic.pause(250)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
        Variable1 = 0
    }
})
