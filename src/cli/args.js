const parseArgs = () => {
  const args = process.argv.slice(2);

  args.forEach((arg, index) => {
    if (index % 2) return;

    const propName = arg.slice(2);
    const propValue = args[index + 1];

    console.log(`${propName} is ${propValue}`);
  });
};

parseArgs();
