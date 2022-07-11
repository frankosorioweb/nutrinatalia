import productTypes from "../modules/productTypes";
import money from "./money";

const { WORKSHOP, EBOOK } = productTypes.state.types;

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
    // Cupón general para todos los talleres (Se debe utilizar prices[WORKSHOP].original.coupons en los talleres que tengan este mismo precio)
    coupons: {
      "$2a$12$ppS4ZePXaMNnnby/5o39sOhLfvi55w8A/8SaGuT6eO/oA79fYmkAu": {
        discount: 20,
        applied: false,
        value: "",
        dollar: {
          value: `11.6 ${money.symbols.dollar}`
        },
        guarani: {
          value: `80.000 ${money.symbols.guarani}`
        }
      }
    }
  }
};

prices[WORKSHOP].panesSinCulpa = {
  default: false,
  discount: 0,
  dollar: {
    value: `14.5 ${money.symbols.dollar}`
  },
  guarani: {
    value: `100.000 ${money.symbols.guarani}`
  },
  coupons: prices[WORKSHOP].original.coupons
};

prices[WORKSHOP].off100Short = {
  default: false,
  discount: 100,
  dollar: {
    value: "GRATIS",
    old: `5 ${money.symbols.dollar}`
  },
  guarani: {
    value: "GRATIS",
    old: `34.000 ${money.symbols.guarani}`
  }
};

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
    }
  }
};

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
  coupons: {
    "$2a$12$ppS4ZePXaMNnnby/5o39sOhLfvi55w8A/8SaGuT6eO/oA79fYmkAu": {
      discount: 20,
      applied: false,
      value: "",
      dollar: {
        value: `23.6 ${money.symbols.dollar}`
      },
      guarani: {
        value: `160.000 ${money.symbols.guarani}`
      }
    }
  }
};

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
};

export default prices;
