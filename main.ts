let counter = 0
let indice = 0
input.onPinPressed(TouchPin.P0, function () {
    counter = 0
    while (counter <= 5) {
        basic.showNumber(counter)
        music.playTone(175, music.beat(BeatFraction.Half))
        counter += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
input.onPinPressed(TouchPin.P2, function () {
    indice = 4
    while (indice >= 0) {
        led.plot(indice, indice)
        indice += -1
        basic.pause(200)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    counter = 0
    for (let counter = 0; counter <= 4; counter++) {
        basic.showNumber(counter)
        music.playTone(175, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Skull)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
