import { Colors } from './colors'

const type = {
  medium: 'SFUIDisplay-Medium',
  regular: 'SFUIDisplay-Regular',
  light: 'SFUIDisplay-Light',
}

const style = {
  h1: {
    color: Colors.white,
    fontFamily: type.light,
    fontSize: 28,
  },
  h2: {
    color: Colors.white,
    fontFamily: type.light,
    fontSize: 14,
    opacity: 0.6,
  },
  h3: {
    color: Colors.white,
    fontFamily: type.regular,
    fontSize: 17,
    opacity: 0.6,
  },
  h4: {
    color: Colors.black,
    fontFamily: type.regular,
    fontSize: 17,
  },
  h5: {
    color: Colors.black,
    fontFamily: type.regular,
    fontSize: 15,
  },
  h6: {
    color: Colors.black,
    fontFamily: type.regular,
    fontSize: 14,
  },
  h7: {
    color: Colors.black,
    fontFamily: type.light,
    fontSize: 12,
  },
  h8: {
    color: Colors.black,
    fontFamily: type.light,
    fontSize: 10,
  },
}

export const Fonts = {
  type,
  style,
}
