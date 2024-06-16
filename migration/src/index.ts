import create from "./create";

const commands = ['create', 'update', 'get'];

const command = process.argv[2];
if (!command || !commands.includes(command)) {
  console.log(`usage: npm run start -- [create/update/get]`);
  process.exit(0);
}

async function main() {
  if (command == 'create') await create();
}
main();
