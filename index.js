import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

const colorfulBox = `#######################################
#######################################
#######################################
#####                             #####
#####           ${color}           #####
#####                             #####
#######################################
#######################################
#######################################`;

console.log(chalk.hex(color)(colorfulBox));
