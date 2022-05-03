import todosStore from './todos.store';
import tomatoesStore from "./tomatoes.store";
import React from "react";

class RootStore {
    todosStore: typeof todosStore;
    tomatoesStore: typeof tomatoesStore;

    constructor() {
        this.todosStore = todosStore;
        this.tomatoesStore = tomatoesStore;
    }

}

const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export {useStore};
