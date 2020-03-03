import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults() {
        try {
            const date = Date.parse(this.query);
            let res;
            if(date){
                res = await axios(`http://localhost:8080/people/search/findByBirthdate?date=${this.query}`);
            }else{
                res = await axios(`http://localhost:8080/people/search/findByName?name=${this.query}`);
            }
            this.result = res.data._embedded.people;
        } catch (error) {
            console.log(error); //TODO
        }

    }

}
