<template>
  <div class="grid place-items-center h-screen px-6 md:px-8 lg:px-10">
    <div class="w-full md:w-2/3 lg:w-1/3 border p-5 rounded-lg">
      <NavigationLogo class="w-48 mb-10 mx-auto" />
      <UiTypographyH2 class="font-medium text-3xl text-center text-secondary">Welcome back.</UiTypographyH2>
      <UiTypographyP class="text-sm text-secondary mb-8 text-center">Enter your details to resume your session.</UiTypographyP>
      <form @submit.prevent="signIn()" action="" class="w-full rounded-xl grid gap-4">
        <FormInput label="Username" v-model="form.username" placeholder="Enter your username"></FormInput>
        <div>
          <FormInput :error="error_state" label="Password" type="password" v-model="form.password" placeholder="Enter your password"></FormInput>
          <p :class="error_state ? 'opacity-100' : 'opacity-0'" class="text-sm text-red-600 mt-2">Wrong username or password</p>
        </div>

        <FormButton :loading="loadingState">Sign In</FormButton>
      </form>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      error_state: false,
      loadingState: false
    }
  },

  methods: {
    signIn(){
      if (this.form.username === 'Superadmin' && this.form.password==='password') {
        this.loadingState = true
        setTimeout(() => {
          this.$router.push({path: '/dashboard'})
        }, 2000);
      } else {
        this.loadingState = true
        setTimeout(() => {
          this.error_state = true
          this.form.password = ''
          this.loadingState = false
        }, 2000);
      }
    }
  },
}
</script>