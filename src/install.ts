import execa from 'execa';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';

const dirname = __dirname;
const cwd = process.cwd();

initGitMessage();
initEditorConfig();
initNodeModulesRcConfig('.npmrc');
initNodeModulesRcConfig('.yarnrc');


function initGitMessage() {
  const gitmessagePath = path.join(dirname, '../config/.gitmessage');
  const gitConfigGitmessage = `git config --local commit.template ${gitmessagePath}`;
  execa.commandSync(gitConfigGitmessage, {
    cwd,
    stdio: 'inherit'
  });
  console.log(chalk.green('.gitmessage configuration success'));
}

function initEditorConfig() {
  const editorconfig = path.join(dirname, '../config/.editorconfig');
  const projectEditorconfigFile = path.join(cwd, '.editorconfig');
  if (!fs.existsSync(projectEditorconfigFile)) {
    fs.copyFileSync(editorconfig, projectEditorconfigFile);
    console.log(chalk.green('.editorconfig configuration success'));
  }
}


function initNodeModulesRcConfig(rcfile: '.npmrc' | '.yarnrc') {
  const rcfilePath = path.join(dirname, `../${rcfile}`);
  const projectRcFile = path.join(cwd, rcfile);
  if (!fs.existsSync(projectRcFile)) {
    fs.copyFileSync(rcfilePath, projectRcFile);
    console.log(chalk.green(`${rcfile} configuration success`));
  }
}
