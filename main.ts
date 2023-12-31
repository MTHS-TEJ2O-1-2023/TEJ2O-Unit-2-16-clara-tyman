/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Dec 2023
 * This program uses the bluetooth radios
*/

// setup
radio.setGroup(76)
basic.showIcon(IconNames.Happy)

let distanceToObject: number = 0

// loop
while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    distanceToObject = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    // if distance is less than or equal to 10
    if (distanceToObject <= 10) {
      basic.showNumber(distanceToObject)
      basic.pause(1000)
      radio.sendString('Too close')
      basic.pause(1000)
    }
    // if distance is more than 10
    if (distanceToObject > 10) {
      basic.showNumber(distanceToObject)
      basic.pause(1000)
      radio.sendString('Ok')
      basic.pause(1000)
    }
  }
}
