import create from "./create";
import get from "./get";

const commands = ['create', 'get'];

const command = process.argv[2];
if (!command || !commands.includes(command)) {
  console.log(`usage: npm run start -- [create/update/get]`);
  process.exit(0);
}

async function main() {
  if (command == 'create') await create();
  if (command == 'get') await get();
}
main();
