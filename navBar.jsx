// use of "props" to set data
function NavBar(props) {
    const list = props.menuitems;
    // each item should have a unique key
    const updatedList = list.map(listitems => {
        return <li>{listitems}</li>;
    })
    // note that React needs to have a single Parent
    return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
const element = <NavBar menuitems={menuItems}/>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
