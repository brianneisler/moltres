import { DeviceType } from '../constants'

import getPlatformData from './getPlatformData'

const isDeviceMobile = (platformData = getPlatformData()) => {
  const { device } = platformData
  return device.type === DeviceType.MOBILE
}

export default isDeviceMobile
