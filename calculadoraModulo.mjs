// importación en modulos de JS

import { resta } from "./restaModulo.mjs";
import chalk from "chalk";

console.log(resta(5, 3));

const primerResultado = resta(5, 3);

const segundoResultado = resta(10, 4);

const mostrarResultado = (resultado) => {
  if (resultado < 5) {
    console.log(chalk.red.bgGray(resultado));
  } else {
    console.log(chalk.green.bgGray(resultado));
  }
};

mostrarResultado(primerResultado);
mostrarResultado(segundoResultado);
