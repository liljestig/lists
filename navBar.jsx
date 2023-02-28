// use of "props" to set data
function NavBar(props) {
    const list = props.menuitems;
    const {Button} = ReactBootstrap;
    // each item should have a unique key
    const updatedList = list.map((listItems, index) => {
        //return <li key={index}>{listItems}</li>;
        return <Button key={index}>{listItems}</Button>;
    });
    // note that React needs to have a single Parent
    return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
const element = <NavBar menuitems={menuItems}/>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
