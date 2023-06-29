import { useUserStore } from '@/store/user'

export default {
    name: "controller",
    setup(props, context){
        const store = useUserStore();
        console.log("controller");
        const jumpToIndex = () => {
            window.href = "./index.html"
        };

        return {
            // 为了能在模板中使用它，你可以返回整个 Store 实例。
            store,
            jumpToIndex,
        }
    }
}