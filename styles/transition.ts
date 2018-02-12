export const EASING = {
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}

export const DURATIONS = {
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195,
  short: 250,
  shorter: 200,
  shortest: 150,
  // most basic recommended timing
  standard: 300
}

export const formatMs = (milliseconds: number) => `${Math.round(milliseconds)}ms`

enum EasingKeys {
  easeInOut = 'easeInOut',
  easeOut = 'easeOut',
  easeIn = 'easeIn',
  sharp = 'sharp'
}

enum DurationKeys {
  shortest = 'shortest',
  shorter = 'shorter',
  short = 'short',
  standard = 'standard',
  complex = 'complex',
  enteringScreen = 'enteringScreen',
  leavingScreen = 'leavingScreen'
}

interface IOption {
  prop?: string,
  duration?: DurationKeys,
  easing?: EasingKeys,
  delay?: number
}

type Easing = { [key in EasingKeys]: string }
type Durations = { [key in DurationKeys]: number }

interface ITransitionConfiguration {
  easing: Easing,
  durations: Durations
}

const DEFAULTS: ITransitionConfiguration = { easing: EASING, durations: DURATIONS }

export class Transition {
  public durations: Durations
  private easing: Easing

  constructor(configuration: ITransitionConfiguration | undefined = DEFAULTS) {
    this.easing = configuration.easing
    this.durations = configuration.durations
  }

  public create(props = ['all'], options: IOption = {}) {
    const {
      duration: duration = DurationKeys.standard,
      easing: easing = EasingKeys.easeInOut,
      delay = 0
    } = options
    const durationOption = this.durations[duration]
    const easingOption = this.easing[easing]

    return (Array.isArray(props) ? props : [props]).map((animatedProp) =>
      `${animatedProp} ${formatMs(durationOption)} ${easingOption} ${formatMs(delay)}`
    ).join(',')
  }

  public getAutoHeightDuration(height?: number): number {
    if (!height) {
      return 0
    }

    const constant = height / 36
    // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10)
  }
}

export const createTransition = (configuration?: ITransitionConfiguration): Transition => {
  return new Transition(configuration)
}
