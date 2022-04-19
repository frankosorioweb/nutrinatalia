<template>
  <div class="small-calendar d-inline-block black rounded primary-font lh-1 py-2 px-3">
    <v-row align="center">
      <v-col cols="auto pr-2">
        <div class="text-center">
          <div class="primary-text mb-1">
            <span>El reto inicia el:</span>
          </div>
          <div class="secondary-text">
            <span>(cupos limitados)</span>
          </div>
        </div>
      </v-col>
      <v-col cols="auto">
        <v-row class="text-center date pr-2">
          <v-col cols="4" class="pl-0 pr-1">
            <div class="square d-flex justify-center align-center px-2 py-1 rounded">
              <span>08</span>
            </div>
          </v-col>
          <v-col cols="4" class="pl-0 pr-1">
            <div class="square d-flex flex-column justify-center align-center px-2 py-1 rounded">
              <span>MA</span>
              <span>YO</span>
            </div>
          </v-col>
          <v-col cols="4" class="pl-0 pr-1">
            <div class="square d-flex flex-column justify-center align-center px-2 py-1 rounded">
              <span>20</span>
              <span>22</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>