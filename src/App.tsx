import './App.css'


interface Item {
  name: string;
  completed: boolean;
  id: string;
}

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list) as Item[];
  } else {
    return [] as Item[];
  }
}

const setLocalStorage = (items: Item[]) => {
  localStorage.setItem('list', JSON.stringify(items));
}


function App() {
  return (
    <div id="root">
      <section className="section-center">
        <div className="toastify"></div>
        <form>
          <h4>Grocery Bud</h4>
          <div className="form-control">
            <input type="text" className="form-control"></input>
            <button type ="submit" className="btn">Add Item</button>
          </div>
        </form>
        <div className = "items"></div>
      </section>
    </div>
  )
}

export default App