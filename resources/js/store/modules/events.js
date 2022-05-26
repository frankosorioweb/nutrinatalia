const state = {
  challengeKetoAyunoV4: {
    textDateInfo: {
      version: '5.0',
      startChallenge: {
        day: '12',
        dayName: 'DOMINGO',
        month: ['JU', 'NIO'],
        year: ['20', '22'],
      },
      endChallenge: {
        day: '26',
        dayName: 'DOMINGO',
        month: ['JU', 'NIO'],
        year: ['20', '22'],
      },
      inscriptionEnd: {
        day: '09',
        dayName: 'JUEVES',
        month: ['JU', 'NIO'],
        year: ['20', '22'],
      }
    },
    // Fecha de expiración de la inscripción (se debe establecer el primer día en el que la gente ya no podrá inscribirse)
    inscriptionEndDate: {
      // Enero empieza en 0
      day: 10,
      month: 5,
      year: 2022
    },
    price: {
      guarani: '200.000 GS',
      dollar: '29.5 USD'
    }
  }
};

const getters = {
  getChallengeKetoAyunoV4Event: (state) => state.challengeKetoAyunoV4,
};

const mutations = {

};

const actions = {

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
