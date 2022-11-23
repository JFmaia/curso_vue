export default {
    data(){
        return{
            fruta:'',
            frutas:['banana','tangerina','abacaxi']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta=''
        }
    }
}