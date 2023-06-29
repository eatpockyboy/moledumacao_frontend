import controller from '../../components/controller/controller';
import data from "@/asset/data/data.json";

export default {
    name: "main",
    components: { controller },
    setup(props, context){
        console.log(data, "main");
    }
}