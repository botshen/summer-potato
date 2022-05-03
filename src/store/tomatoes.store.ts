import {computed, makeAutoObservable} from "mobx";

class TomatoesStore {

    list = ['vue', 'react'];

    constructor() {
        makeAutoObservable(this);
    }


    addList = () => {
        this.list.push('angular');
    }


}

const tomatoesStore = new TomatoesStore();
export default tomatoesStore;
