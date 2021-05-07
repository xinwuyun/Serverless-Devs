import program from 'commander';
// import { registerCommandChecker } from '../utils/command-util';
import i18n from '../utils/i18n';


program
  .name('s set')
  .usage('[commands] [options]')
  .helpOption('-h, --help', i18n.__('Display help for command'))
  .command('registry', i18n.__('Set up a custom registry'))
  .command('language', i18n.__('Output language switch'))
  .description(i18n.__('You can make some default settings for the tool here.'))
  .addHelpCommand(false).parse(process.argv);

