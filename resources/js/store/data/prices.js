import productTypes from "../modules/productTypes";
import money from "./money";

const { WORKSHOP, EBOOK } = productTypes.state.types;

let prices = {};

prices[WORKSHOP] = {
  original: {
    default: false,
    discount: 0,
    dollar: {
      value: `14.2 ${money.symbols.dollar}`,
      // old: `14.2 ${money.symbols.dollar}`,
    },
    guarani: {
      value: `100.000 ${money.symbols.guarani}`,
      // old: `100.000 ${money.symbols.guarani}`,
    },
    // Cupón general para todos los talleres (Se debe utilizar prices[WORKSHOP].original.coupons en los talleres que tengan este mismo precio)
    coupons: {
      /*"$2a$12$ppS4ZePXaMNnnby/5o39sOhLfvi55w8A/8SaGuT6eO/oA79fYmkAu": {
        discount: 20,
        applied: false,
        value: "",
        dollar: {
          value: `11.6 ${money.symbols.dollar}`
        },
        guarani: {
          value: `80.000 ${money.symbols.guarani}`
        }
      }*/
      "$2a$12$V.uc1eMSyoI3vGcaJCZtGeydF9BPkmPfQ/312cprpEbBCr2yNs1Tu": {
        discount: 15,
        applied: false,
        value: "",
        dollar: {
          value: `12 ${money.symbols.dollar}`
        },
        guarani: {
          value: `85.000 ${money.symbols.guarani}`
        }
      },
      "$2a$12$rxziDLEVqVlaHk3Kl9Ddau5d08CymXs8wK.Kd00.wB5yPIGwkkzmu": {
        discount: 20,
        applied: false,
        value: "",
        dollar: {
          value: `11.35 ${money.symbols.dollar}`
        },
        guarani: {
          value: `80.000 ${money.symbols.guarani}`
        }
      },
      "$2a$12$xnWearDe5f354zGt7xCIv.gNLIBMMjVuXyvIMuGA/.XCRJ.7s61Tq": {
        discount: 20,
        applied: false,
        value: "",
        dollar: {
          value: `11.35 ${money.symbols.dollar}`
        },
        guarani: {
          value: `80.000 ${money.symbols.guarani}`
        }
      },
    }
  }
};

// Utilizamos de esta manera cuando queremos que un cupón de descuento afecte solamente a un taller o ebook
/*prices[WORKSHOP].panesSinCulpa = {
  default: false,
  discount: 0,
  dollar: {
    value: `14.5 ${money.symbols.dollar}`
  },
  guarani: {
    value: `100.000 ${money.symbols.guarani}`
  },
  coupons: prices[WORKSHOP].original.coupons
};*/

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
    },
  }
};

// Para el Reto 15 días keto + ayuno
prices[WORKSHOP].Reto15DiasKetoAyuno = {
  default: false,
  discount: 0,
  dollar: {
    value: `28.4 ${money.symbols.dollar}`
  },
  guarani: {
    value: `200.000 ${money.symbols.guarani}`
  },
  coupons: {
    /*"$2a$12$ppS4ZePXaMNnnby/5o39sOhLfvi55w8A/8SaGuT6eO/oA79fYmkAu": {
      discount: 20,
      applied: false,
      value: "",
      dollar: {
        value: `23.6 ${money.symbols.dollar}`
      },
      guarani: {
        value: `160.000 ${money.symbols.guarani}`
      }
    }*/
  }
};

// Para el Reto Go
prices[WORKSHOP].RetoGo = {
  default: false,
  discount: 0,
  dollar: {
    value: `42.5 ${money.symbols.dollar}`
  },
  guarani: {
    value: `300.000 ${money.symbols.guarani}`
  },
  coupons: {}
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
    value: `31.2 ${money.symbols.dollar}`,
    // old: `31.2 ${money.symbols.dollar}`,
    // value: `15.6 ${money.symbols.dollar}`,
  },
  guarani: {
    value: `220.000 ${money.symbols.guarani}`,
    // old: `220.000 ${money.symbols.guarani}`,
    // value: `110.000 ${money.symbols.guarani}`,
  },
  coupons: {
    "$2a$12$V.uc1eMSyoI3vGcaJCZtGeydF9BPkmPfQ/312cprpEbBCr2yNs1Tu": {
      discount: 15,
      applied: false,
      value: "",
      dollar: {
        value: `26.5 ${money.symbols.dollar}`
      },
      guarani: {
        value: `187.000 ${money.symbols.guarani}`
      }
    },
    "$2a$12$rxziDLEVqVlaHk3Kl9Ddau5d08CymXs8wK.Kd00.wB5yPIGwkkzmu": {
      discount: 20,
      applied: false,
      value: "",
      dollar: {
        value: `24.9 ${money.symbols.dollar}`
      },
      guarani: {
        value: `176.000 ${money.symbols.guarani}`
      }
    },
    "$2a$12$5LRscAXayic77noMS0cHLufKt8lDBz8XOPlEWOODmt0r.x2tLmSGu": {
      discount: 20,
      applied: false,
      value: "",
      dollar: {
        value: `24.9 ${money.symbols.dollar}`,
      },
      guarani: {
        value: `176.000 ${money.symbols.guarani}`
      }
    }
  }
};

/*
  e-Book DULCES QUE NOS HACEN BIEN
  Su precio original es de 150.000 Gs
  Tendrá un precio de lanzamiento hasta el 05 de Agosto por valor de 120.000 Gs
*/
prices[EBOOK].dulcesSalusables = {
  default: false,
  discount: 0,
  dollar: {
    /*value: `17.5 ${money.symbols.dollar}`,
    old: `21.5 ${money.symbols.dollar}`,*/
    value: `21 ${money.symbols.dollar}`
  },
  guarani: {
    /*value: `120.000 ${money.symbols.guarani}`,
    old: `150.000 ${money.symbols.guarani}`,*/
    value: `150.000 ${money.symbols.guarani}`
  },
  coupons: {
    "$2a$12$V.uc1eMSyoI3vGcaJCZtGeydF9BPkmPfQ/312cprpEbBCr2yNs1Tu": {
      discount: 15,
      applied: false,
      value: "",
      dollar: {
        value: `17.5 ${money.symbols.dollar}`
      },
      guarani: {
        value: `127.500 ${money.symbols.guarani}`
      }
    },
    "$2a$12$rxziDLEVqVlaHk3Kl9Ddau5d08CymXs8wK.Kd00.wB5yPIGwkkzmu": {
      discount: 20,
      applied: false,
      value: "",
      dollar: {
        value: `16.5 ${money.symbols.dollar}`
      },
      guarani: {
        value: `120.000 ${money.symbols.guarani}`
      }
    }
  }
};

prices[EBOOK].EspecialNavidad = {
  default: false,
  discount: 0,
  dollar: {
    value: `9 ${money.symbols.dollar}`
  },
  guarani: {
    value: `65.000 ${money.symbols.guarani}`
  },
  coupons: {
    "$2a$12$V.uc1eMSyoI3vGcaJCZtGeydF9BPkmPfQ/312cprpEbBCr2yNs1Tu": {
      discount: 15,
      applied: false,
      value: "",
      dollar: {
        value: `7.65 ${money.symbols.dollar}`
      },
      guarani: {
        value: `55.250 ${money.symbols.guarani}`
      }
    },
    "$2a$12$rxziDLEVqVlaHk3Kl9Ddau5d08CymXs8wK.Kd00.wB5yPIGwkkzmu": {
      discount: 20,
      applied: false,
      value: "",
      dollar: {
        value: `7.2 ${money.symbols.dollar}`
      },
      guarani: {
        value: `52.000 ${money.symbols.guarani}`
      }
    }
  }
};

export default prices;
