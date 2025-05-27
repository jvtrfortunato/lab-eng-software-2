import { Link } from "react-router-dom";
import Toolbar from "./compInteratividade/ToolBar";
import Gallery1 from "./compInteratividade/Gallery1";
import Counter from "./compInteratividade/Counter";
import MovingDot from "./compInteratividade/MovingDot";
import Form from "./compInteratividade/Form";
import Form2 from "./compInteratividade/Form2";
import Form3 from "./compInteratividade/Form3";
import List1 from "./compInteratividade/List1";
import List2 from "./compInteratividade/List2";
import ShapeEditor from "./compInteratividade/ShapeEditor";
import CounterList from "./compInteratividade/CounterList";

function AtvInteratividade() {
    return(
         <>
            <h1>Atividade Interatividade</h1><br/><br/>
            <Toolbar /><br/><br/>
            <Gallery1 /><br/><br/>
            <Counter /><br/><br/>
            <Form /><br/><br/>
            <MovingDot /><br/><br/>
            <Form2 /><br/><br/>
            <Form3 /><br/><br/>
            <List1 /><br/><br/>
            <List2 /><br/><br/>
            <ShapeEditor /><br/><br/>
            <CounterList /><br/><br/>
            <Link to="/">Retornar a Página Inicial</Link><br/><br/>
        </> 

    );
}

export default AtvInteratividade;