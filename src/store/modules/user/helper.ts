import { ss } from '@/utils/storage'
import { t } from '@/locales'
import { homeStore } from "@/store";
const LOCAL_NAME = 'userStorage'
const backgroundImage = homeStore.myData.session.backgroundImage ?? "https://t.alcy.cc/fj/"

export interface UserInfo {
  avatar: string
  name: string
  backgroundImage: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://img.houhoukang.com/uranus/ChatGPT.jpg',
      name:  t('mjset.sysname'),//'AI绘图',
      description: 'Star on <a href="https://github.com/hp0912/chatgpt-web-midjourney-proxy" class="text-blue-500" target="_blank" >GitHub</a> -> <a href="https://github.com/Dooy/chatgpt-web-midjourney-proxy" class="text-blue-500" target="_blank" >Fork</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
