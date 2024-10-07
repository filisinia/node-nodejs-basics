const parseEnv = () => {
  const data = process.env;

  Object.entries(data).forEach((line) => {
    console.log(`RSS_${line[0]}=${line[1]}`);
  });
};

parseEnv();
