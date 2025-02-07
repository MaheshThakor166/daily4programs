async function executeInSequence(tasks) {
    let results = [];
    for (let task of tasks) {
        let result = await task();
        results.push(result);
    }
    return results;
}

// Example usage:
const asyncTask1 = () => new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 1000));
const asyncTask2 = () => new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 500));
const asyncTask3 = () => new Promise(resolve => setTimeout(() => resolve("Task 3 done"), 200));

executeInSequence([asyncTask1, asyncTask2, asyncTask3])
    .then(results => console.log(results));

