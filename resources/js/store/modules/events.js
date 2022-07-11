const state = {
  challengeKetoAyunoV4: {
    textDateInfo: {
      version: '7.0',
      startChallenge: {
        day: '11',
        dayName: 'DOMINGO',
        month: ['SE', 'PT'],
        year: ['20', '22'],
      },
      endChallenge: {
        day: '25',
        dayName: 'DOMINGO',
        month: ['SE', 'PT'],
        year: ['20', '22'],
      },
      inscriptionEnd: {
        day: '09',
        dayName: 'VIERNES',
        month: ['SE', 'PT'],
        year: ['20', '22'],
      }
    },
    // Fecha de expiración de la inscripción (se debe establecer el primer día en el que la gente ya no podrá inscribirse)
    inscriptionEndDate: {
      // Enero empieza en 0
      day: 10,
      month: 8,
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
