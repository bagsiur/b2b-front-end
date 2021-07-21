<template>
  <div class="login">
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <div class="card-group d-block d-md-flex row">
              <div class="card col-md-7 p-4 mb-0">
                <div class="card-body">
                  <h1>{{ $t("translation.login") }}</h1>
                  <p class="text-medium-emphasis">{{ $t("translation.sign_in_to_your_account") }}</p>
                  <div class="input-group mb-3">
                    <span class="input-group-text">
                      <fa icon="user" />
                    </span>
                    <input
                      class="form-control"
                      type="text"
                      :placeholder="$t('translation.username')"
                    />
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-text">
                      <fa icon="unlock-alt" />
                    </span>
                    <input
                      class="form-control"
                      type="password"
                      :placeholder="$t('translation.password')"
                    />
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button class="btn btn-primary px-4" type="button">
                        {{ $t("translation.log_in") }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .input-group-text{
        color: #5b5b5b;
        font-size: 11px;
    }
</style>