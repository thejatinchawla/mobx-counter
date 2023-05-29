import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore";

export const Count = observer(()=>{
    const {rootStore:{countStore}} = useStore()
    const onIncrement = () =>{
        countStore.increment()
    }
    const onDecrement = () =>{
        countStore.decrement()
    }
    return (
        <div>
            count : {countStore.getCountValue}
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    )
})