import { defineStore } from 'pinia'

export type Profile = {
  avatarUrl: string,
  username: string
} | null

export type userState = {
  profile: Profile
  token: string | null
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    profile: null,
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
