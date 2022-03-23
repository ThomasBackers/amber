import { defineStore } from 'pinia'

export type Profile = {
  avatarUrl: string,
  username: string
} | null

export type UserState = {
  profile: Profile
  token: string | null
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    profile: null,
    token: null
  } as UserState),
  getters: {
    getProfile: (state: UserState): Profile => state.profile,
    getToken: (state: UserState): string | null => state.token
  },
  actions: {
    setUser (profile: Profile, token: string | null): void {
      this.profile = profile
      this.token = token
    }
  }
})
