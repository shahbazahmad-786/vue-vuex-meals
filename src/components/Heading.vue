<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-12">
        <h1 class="text-orange mb-3">
          <slot name="heading" />
        </h1>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
