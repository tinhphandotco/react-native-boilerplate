import { Colors } from './colors'

export const CommonStyles = {
  shadow: {
    shadowColor: Colors.shadowButton,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
  },
  tabBarTopShadow: {
    shadowColor: Colors.shadowTabBar,
    shadowOffset: {
      width: 0,
      height: -18,
    },
    shadowOpacity: 1,
    shadowRadius: 70,
    elevation: 5,
  },
  shadowButton: {
    shadowColor: Colors.shadowButton,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  shadowButtonCircle: {
    shadowColor: Colors.shadowButton,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 4,
  },
}
