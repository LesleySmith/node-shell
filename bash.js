process.stdout.write('prompt > ');
const exportsFromPwd = require('./pwd.js');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd !== 'pwd') {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  } else if (exportsFromPwd !== '{}') {
    process.stdout.write(exportsFromPwd);
  }
});
