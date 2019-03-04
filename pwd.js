
const cwd = process.cwd();

module.exports = function () {
  process.stdout.write(cwd);
  process.stdout.write('\nprompt > ');
}
