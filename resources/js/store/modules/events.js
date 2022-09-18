const state = {
  challengeKetoAyunoV4: {
    textDateInfo: {
      version: '8.0',
      startChallenge: {
        day: '13',
        dayName: 'DOMINGO',
        month: ['NO', 'VIE'],
        monthText: 'NOVIEMBRE',
        year: ['20', '22'],
      },
      endChallenge: {
        day: '27',
        dayName: 'DOMINGO',
        month: ['NO', 'VIE'],
        monthText: 'NOVIEMBRE',
        year: ['20', '22'],
      },
      inscriptionEnd: {
        day: '12',
        dayName: 'SÁBADO',
        month: ['NO', 'VIE'],
        monthText: 'NOVIEMBRE',
        year: ['20', '22'],
      }
    },
    // Fecha de expiración de la inscripción (se debe establecer el primer día en el que la gente ya no podrá inscribirse)
    inscriptionEndDate: {
      // Enero empieza en 0
      day: 13,
      month: 10,
      year: 2022
    },
    fullInscriptionCuotaState: false,
    price: {
      guarani: '200.000 GS',
      dollar: '29.5 USD'
    }
  }
};

const getters = {
  getChallengeKetoAyunoV4Event: (state) => state.challengeKetoAyunoV4,
  /**
   * @returns True o False si no queremos mostrar el banner principal del evento keto + ayuno.
   */
   getInscriptionState: (state) => {
    const { inscriptionEndDate } = state.challengeKetoAyunoV4;
    let expired = false;
    
    const now = new Date();
    const expireEventDate = new Date(`${inscriptionEndDate.year}-${inscriptionEndDate.month+1}-${inscriptionEndDate.day}`);

    if( now.getTime() >= expireEventDate.getTime() ) {
      expired = true;
    }

    return !expired && !state.challengeKetoAyunoV4.fullInscriptionCuotaState;
  }
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
