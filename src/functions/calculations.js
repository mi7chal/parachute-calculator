export const calculateByDelay = (delay, height) => {
  let fly = [];
  fly.push({ y: height, x: 0 });

  fly.push({ y: height - 340, x: 10 });
  if (delay > 10) {
    const delayFalling = delay - 10;
    fly.push({
      label: "123",
      y: fly[fly.length - 1].y - delayFalling * 50,
      x: fly[fly.length - 1].x + delayFalling,
    });
  }
  fly.push({ y: fly[fly.length - 1].y - 100, x: fly[fly.length - 1].x + 2 });
  let dist = 0;
  console.log(dist);
  fly.push({ y: 0, x: fly[fly.length - 1].x + fly[fly.length - 1].y / 3 });
  return fly;
};

export const calculateSpeedByDelay = (delay, height) => {
  let fly = [];
  fly.push({ label: "123", y: 0, x: 0 });
  let distance = 0;
  fly.push({ label: "123", y: 50, x: 10 });
  distance += 340;
  if (delay > 10) {
    const delayFalling = delay - 10;
    fly.push({
      label: "123",
      y: 50,
      x: fly[fly.length - 1].x + delayFalling,
    });
    distance += delayFalling * 50;
  }
  fly.push({ label: "123", y: 3, x: fly[fly.length - 1].x + 2 });
  distance += 100;
  let dist = 0;
  console.log(dist);
  fly.push({ label: "123", y: 3, x: (height - distance) / 3 });
  return fly;
};

export const calculateByHeight = (heightOpened, height) => {
  let fly = [];
  fly.push({ y: height, x: 0 });

  fly.push({ y: height - 340, x: 10 });
  if (heightOpened < height - 340) {
    //const delayFalling = delay - 10;
    const x = height - heightOpened - 340;
    fly.push({
      y: heightOpened,
      x: x / 50,
    });
  }
  fly.push({ y: fly[fly.length - 1].y - 100, x: fly[fly.length - 1].x + 2 });
  let dist = 0;
  console.log(dist);
  fly.push({ y: 0, x: fly[fly.length - 1].x + fly[fly.length - 1].y / 3 });
  return fly;
};

export const calculateSpeedByHeight = (heightOpened, height) => {
  let fly = [];
  console.log("111"+heightOpened);
  fly.push({ y: 0, x: 0 });
  let distance = 0;
  fly.push({ y: 50, x: 10 });
  distance += 340;
  if (heightOpened + 340 < height) {
    const x = height - heightOpened - 340;
    fly.push({
      y: 50,
      x: fly[fly.length - 1].x + x / 50,
    });
    distance += x;
  }
  fly.push({ y: 3, x: fly[fly.length - 1].x + 2 });
  distance += 100;
  let dist = 0;
  console.log(dist);
  fly.push({ label: "123", y: 3, x: (height - distance) / 3 });
  return fly;
};
