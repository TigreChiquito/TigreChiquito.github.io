function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;  
}

//function Image(){
//    return <img src="d20.png" alt="d20" />
//}

//function P(){
//    return <p>hola</p>
//}

function HomePage() {
    return (
        <div>
            <Header title="React" />
            <Header title="A new title" />
            <Header title="Hello World"/>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);