import os from 'os'

const filetime = () => (os.platform() == 'win32' ? 'mtime' : 'ctime')

export default filetime
