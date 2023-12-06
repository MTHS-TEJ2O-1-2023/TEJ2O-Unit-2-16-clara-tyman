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
if (input.buttonIsPressed(Button.A) === true) {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  if (distanceToObject < 10) {
      basic.showNumber(distanceToObject)
      basic.pause(1000)
    radio.sendString('Too Close')
  } else {
        (distanceToObject > 10); {
        basic.showNumber(distanceToObject)
        basic.pause(1000)
        radio.sendString('Good')
    }
  }
}
