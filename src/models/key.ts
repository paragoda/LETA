import { Finger } from './finger'

type KeyPress = {
  primary: string
  shift: string
}

type KeyDto = KeyPress & {
  finger: Finger
}

type KeyInfo = KeyDto

const QWERTY: KeyInfo[][] = [
  [
    { primary: '`', shift: '~', finger: Finger.LeftPinky },
    { primary: '1', shift: '!', finger: Finger.LeftPinky },
    { primary: '2', shift: '@', finger: Finger.LeftPinky },
    { primary: '3', shift: '#', finger: Finger.LeftRing },
    { primary: '4', shift: '$', finger: Finger.LeftMiddle },
    { primary: '5', shift: '%', finger: Finger.LeftIndex },
    { primary: '6', shift: '^', finger: Finger.LeftIndex },
    { primary: '7', shift: '&', finger: Finger.RightIndex },
    { primary: '8', shift: '*', finger: Finger.RightIndex },
    { primary: '9', shift: '(', finger: Finger.RightMiddle },
    { primary: '0', shift: ')', finger: Finger.RightRing },
    { primary: '-', shift: '_', finger: Finger.RightPinky },
    { primary: '=', shift: '+', finger: Finger.RightPinky },
  ],
  [
    { primary: 'q', shift: 'Q', finger: Finger.LeftPinky },
    { primary: 'w', shift: 'W', finger: Finger.LeftRing },
    { primary: 'e', shift: 'E', finger: Finger.LeftMiddle },
    { primary: 'r', shift: 'R', finger: Finger.LeftIndex },
    { primary: 't', shift: 'T', finger: Finger.LeftIndex },
    { primary: 'y', shift: 'Y', finger: Finger.RightIndex },
    { primary: 'u', shift: 'U', finger: Finger.RightIndex },
    { primary: 'i', shift: 'I', finger: Finger.RightMiddle },
    { primary: 'o', shift: 'O', finger: Finger.RightRing },
    { primary: 'p', shift: 'P', finger: Finger.RightPinky },
    { primary: '[', shift: '{', finger: Finger.RightPinky },
    { primary: ']', shift: '}', finger: Finger.RightPinky },
    { primary: '\\', shift: '|', finger: Finger.RightPinky },
  ],
  [
    { primary: 'a', shift: 'A', finger: Finger.LeftPinky },
    { primary: 's', shift: 'S', finger: Finger.LeftRing },
    { primary: 'd', shift: 'D', finger: Finger.LeftMiddle },
    { primary: 'f', shift: 'F', finger: Finger.LeftIndex },
    { primary: 'g', shift: 'G', finger: Finger.LeftIndex },
    { primary: 'h', shift: 'H', finger: Finger.RightIndex },
    { primary: 'j', shift: 'J', finger: Finger.RightIndex },
    { primary: 'k', shift: 'K', finger: Finger.RightMiddle },
    { primary: 'l', shift: 'L', finger: Finger.RightRing },
    { primary: ';', shift: ':', finger: Finger.RightPinky },
    { primary: '\'', shift: '"', finger: Finger.RightPinky },
  ],
  [
    { primary: 'z', shift: 'Z', finger: Finger.LeftPinky },
    { primary: 'x', shift: 'X', finger: Finger.LeftRing },
    { primary: 'c', shift: 'C', finger: Finger.LeftMiddle },
    { primary: 'v', shift: 'V', finger: Finger.LeftIndex },
    { primary: 'b', shift: 'B', finger: Finger.LeftIndex },
    { primary: 'n', shift: 'N', finger: Finger.RightIndex },
    { primary: 'm', shift: 'M', finger: Finger.RightIndex },
    { primary: ',', shift: '<', finger: Finger.RightMiddle },
    { primary: '.', shift: '>', finger: Finger.RightRing },
    { primary: '/', shift: '?', finger: Finger.RightPinky },
  ],
]

export { QWERTY }
export type { KeyDto, KeyInfo }