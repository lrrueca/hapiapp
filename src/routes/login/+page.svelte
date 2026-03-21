<script lang="ts">
  import './style.css'
  import logo from '$lib/assets/Selecta_Logo_2022.svg'
  import Icon from '@iconify/svelte'
</script>

<div class="center">
  <div class="form-container">
    <!-- logo -->
    <div class="logo-container">
      <img src={logo} alt="Selecta Logo" />
    </div>

    <!-- message -->
    <div class="message alert hidden alert-soft alert-error">
      <Icon class="icon" icon="material-symbols:warning-outline-rounded" width="20" />
      <span>Invalid username or password.</span>
    </div>

    <div class="fields-container">
      <!-- username -->
      <div class="field">
        <div class="field-label">Username</div>
        <label class="input input-lg">
          <Icon class="icon" icon="mi:user" width="20" />
          <input type="email" placeholder="Enter username" />
        </label>
      </div>

      <!-- company code -->
      <div class="field">
        <div class="field-label">Company code</div>
        <label class="input input-lg">
          <Icon class="icon" icon="material-symbols:store-outline-rounded" width="20" />
          <input type="text" placeholder="Enter company code" />
        </label>
      </div>

      <!-- password -->
      <div class="field">
        <div class="field-label">Password</div>
        <label class="input input-lg">
          <Icon class="icon" icon="material-symbols:key-outline-rounded" width="20" />
          <input type="password" placeholder="Enter password" />
          <button class="cursor-pointer">
            <Icon class="icon" icon="bx:show" width="20" />
          </button>
        </label>
      </div>
    </div>

    <div class="bottom-section">
      <div class="options">
        <label class="remember-me">
          <input type="checkbox" class="checkbox -mt-1 checkbox-xs" />
          <span>Remember me</span>
        </label>
        <a href="#" class="forgot-password">Forgot password?</a>
      </div>
      <button class="login-btn btn btn-lg"> Login </button>
    </div>
  </div>
</div>
