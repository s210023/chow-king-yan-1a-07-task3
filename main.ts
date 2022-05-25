input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(randint(1, 100))
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("Hello")
    basic.pause(500)
    basic.clearScreen()
})
