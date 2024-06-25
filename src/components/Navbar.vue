<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand text-orange" :to="{ name: 'Home' }">
        <b>SA Meals</b>
      </router-link>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0"></ul>
        <div class="d-flex my-2 my-lg-0">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'ByName' }" aria-current="page">
                Search By Name
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'ByLetter' }" aria-current="page">
                Search By Letter
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Ingredients' }" aria-current="page">
                Search By Ingredients
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.navbar {
  background-color: #ffffff !important;
  box-shadow: -12px -1px 4px 2px grey;
}
ul li a:hover {
  background-color: rgb(255, 115, 0) !important;
  color: #ffffff !important;
  border-radius: 3px;
}

ul li .router-link-exact-active {
  background-color: rgb(255, 115, 0) !important;
  color: #ffffff !important;
  border-radius: 3px;
}
</style>
