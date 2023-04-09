import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
    const [data, setData] = useState({ success: false });
    const getData = (formData) => {
        setData(formData);
    };
    return (
        <div className="App">
            {data.success ? (
                <Table userData={data} />
            ) : (
                <Form onSubmit={getData} />
            )}
        </div>
    );
}

export default App;
