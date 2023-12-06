/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Dec 2023
 * This program uses the bluetooth radios
*/

// setup
radio.setGroup(8)
basic.showIcon(IconNames.Happy)

let distanceToObject: number = 0

// find distance from sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  if (distanceToObject < 10) {
    radio.sendString('Too Close')
  }
  if (distanceToObject > 10) {
    radio.sendString('Good')
  }
})
