
solver = () => {
    console.log('Hello world!');
}

const time = 2000;

function run(handler, delay) {
    setTimeout(() => {
        handler();
    }, delay);
}

run(solver, time);
      
