function Header() {
    return <h1>Hello World</h1>;
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
            <Header />
            <p>hola</p>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);