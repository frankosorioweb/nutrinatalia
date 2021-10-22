<template>
  <article class="testimony">
    <v-card elevation="5" class="testimony-card d-flex flex-column rounded-lg text-left">
      <div class="avatar-wrapper rounded-circle elevation-5">
        <img
          class="avatar-img rounded-circle"
          :src="this.avatar"
          alt="Avatar"
        />
      </div>

      <div class="pa-6">
        <svg
          width="36"
          height="29"
          viewBox="0 0 36 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_833:2114)">
            <path
              d="M9.25839 12.4055C7.60688 12.4055 6.08701 12.9905 4.85868 13.9649C4.97949 9.89752 7.93684 5.82863 13.7719 1.759L12.906 0.330566C4.45122 5.9155 0.223297 12.045 0.223297 18.718C0.223297 21.7823 1.0075 24.1837 2.5773 25.9184C4.14606 27.6565 6.1324 28.5232 8.53424 28.5232C10.9375 28.5232 12.8739 27.8261 14.3477 26.4296C15.8204 25.0349 16.5578 23.3478 16.5578 21.374C16.5578 21.3517 16.554 21.3354 16.554 21.3116C16.599 20.9616 16.6308 20.6078 16.6308 20.2422C16.6308 15.9153 13.3288 12.4055 9.25839 12.4055Z"
              fill="#00959B"
            />
            <path
              d="M33.0949 25.6534C33.1902 25.5361 33.3058 25.4244 33.3934 25.3018C34.4793 23.9361 35.1388 22.1732 35.1388 20.2426C35.1388 15.9157 31.8376 12.4047 27.7671 12.4047C25.9026 12.4047 24.2054 13.1464 22.9065 14.361C22.9065 14.3128 22.8992 14.2719 22.8992 14.2222C22.8992 10.0687 25.8771 5.9129 31.8355 1.75826L30.9703 0.330566C22.5144 5.9155 18.2865 12.045 18.2865 18.7195C18.2865 21.7838 19.0707 24.1849 20.6412 25.9196C22.2096 27.6576 24.1956 28.5255 26.5974 28.5255C28.9993 28.5255 30.9381 27.8272 32.4109 26.43C32.6193 26.2351 32.781 26.0161 32.9594 25.8071C33.0065 25.7573 33.0488 25.7054 33.0949 25.6534Z"
              fill="#00959B"
            />
          </g>
          <defs>
            <clipPath id="clip0_833:2114">
              <rect
                width="34.9155"
                height="28.1942"
                fill="white"
                transform="translate(0.223297 0.330566)"
              />
            </clipPath>
          </defs>
        </svg>
        <v-card-title class="px-0 py-2">
          <h3>{{ this.name }}</h3>
        </v-card-title>
        <v-card-text class="px-0 pb-0">
          <p class="text-left text mb-0">{{ this.text }}</p>
        </v-card-text>
      </div>
      <div class="px-5 py-3 mt-auto grey lighten-4 text-center">
        <social-media-small-button :link="socialMedia.facebook" :type="true" />
        <social-media-small-button :link="socialMedia.instagram" :type="false" />
      </div>
    </v-card>
  </article>
</template>

<script>
import { mapState } from "vuex";
import socialMediaSmallButton from '../../socialMediaButtons/smallButton.vue';
export default {
  props: ['avatar', 'name', 'text', 'socialMedia'],
  components: {
    socialMediaSmallButton
  },
  computed: {
    ...mapState(["links"]),
  },
};
</script>