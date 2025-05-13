import { Link } from "react-router-dom";
import Gallery from "./Gallery"
import TodoList from "./TodoList"
import Avatar from "./Avatar"
import PackingList from "./Item";
import List from "./Appp";
import TeaGathering from "./Cup";

export default function AtvUi() {
    return (
        <>
            <article>
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                </ol>
            </article>
            <br />

            <Gallery />
            <br />

            <TodoList />
            <br />

            <PackingList />
            <br />

            <List />
            <br />

            <TeaGathering />
            <br />

            <br />
            <br />
            <Link to="/">Retornar a Página Inicial</Link>
        </>
    );
}
