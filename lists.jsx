const numbers = [1, 2, 3, 4, 5];

const updatedNums = numbers.map((number, index) => {
    return <li key={index.toString}>{number}</li>;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <ul>{updatedNums}</ul>
root.render(element);
