import productTypes from '../modules/productTypes';
import money from './money';

const {
  WORKSHOP,
  EBOOK
} = productTypes.state.types;

let prices = {};

prices[WORKSHOP] = {
  original: {
    default: true,
    discount: 0,
    dollar: {
      value: `14.5 ${money.symbols.dollar}`
    },
    guarani: {
      value: `100.000 ${money.symbols.guarani}`
    },
    coupons: {}
  }
}

prices[WORKSHOP].panesSinCulpa = {
  default: false,
  discount: 0,
  dollar: {
    value: `14.5 ${money.symbols.dollar}`
  },
  guarani: {
    value: `100.000 ${money.symbols.guarani}`
  },
  coupons: {
    "$2a$12$pfRyfpxH79P4zwzxXUC.huOkvHn17CEATlrf1R9X41KWaVPn62Z.a": {
      discount: 20,
      applied: false,
      value: "",
      dollar: {
        value: `11.6 ${money.symbols.dollar}`,
      },
      guarani: {
        value: `80.000 ${money.symbols.guarani}`,
      }
    }
  }
}

prices[WORKSHOP].off100Short = {
  default: false,
  discount: 100,
  dollar: {
    value: 'GRATIS',
    old: `5 ${money.symbols.dollar}`
  },
  guarani: {
    value: 'GRATIS',
    old: `34.000 ${money.symbols.guarani}`
  }
}

// Actualmente no utilizado
prices[EBOOK] = {
  original: {
    default: true,
    discount: 0,
    dollar: {
      value: `29 ${money.symbols.dollar}`
    },
    guarani: {
      value: `200.000 ${money.symbols.guarani}`
    },
  }
}

// Para el Reto
prices[WORKSHOP].Reto15DiasKetoAyuno = {
  default: false,
  discount: 0,
  dollar: {
    value: `29.5 ${money.symbols.dollar}`
  },
  guarani: {
    value: `200.000 ${money.symbols.guarani}`
  },
  coupons: {}
}

/*prices[EBOOK].recetario = {
  default: false,
  discount: 0,
  dollar: {
    value: `7.5 ${money.symbols.dollar}`
  },
  guarani: {
    value: `50.000 ${money.symbols.guarani}`
  },
  coupons: {}
}*/

prices[EBOOK].ketoAyuno30Dias = {
  default: false,
  discount: 0,
  dollar: {
    value: `32 ${money.symbols.dollar}`
  },
  guarani: {
    value: `220.000 ${money.symbols.guarani}`
  },
  coupons: {}
}

export default prices;
