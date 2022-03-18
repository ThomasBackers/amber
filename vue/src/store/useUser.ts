import { defineStore } from 'pinia'

type Profile = {} | {
  avatarUrl: string,
  username: string
}
type userState = {
  profile: Profile
  token: string | null
}

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {},
    token: null
  } as userState),
  getters: {
    getProfile: (state: userState): Profile => state.profile,
    getToken: (state: userState): string | null => state.token
  },
  actions: {
    setUser (profile: Profile, token: string | null): void {
      this.profile = profile
      this.token = token
    }
  }
})
