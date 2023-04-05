<template>
  <div>
    <form @submit.prevent="signIn()" action="" class="w-full md:w-2/3 lg:w-full rounded-xl p-5" :class="is_small ? 'p-0' : ''">
        <h1 class="font-medium text-3xl w-fit text-secondary">Welcome back.</h1>
        <p class="text-sm text-secondary mb-8">Enter your details to resume your session.</p>

        <div class="grid gap-4">
          <FormInput label="Username" v-model="form.username" placeholder="Enter your username"></FormInput>
          <div>
            <FormInput :error="error_state" label="Password" type="password" v-model="form.password" placeholder="Enter your password"></FormInput>
            <p :class="error_state ? 'opacity-100' : 'opacity-0'" class="text-sm text-red-600 mt-2">Wrong username or password</p>
          </div>

          <FormButton :loading="loadingState" class="-mt-3">Sign In</FormButton>
        </div>
      </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
}
</script>