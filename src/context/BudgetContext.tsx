import { createContext, ReactNode, useReducer } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

// -- INICIO DE TYPES
type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
}
type BudgetProviderProps = {
    children: ReactNode
}
// -- FIN DE TYPES


// el BudgetContext nos esta sirviendo para la creacion del ''componente'' "<BudgetContext.Provider/>" para que esten relacionados el Provider y el Context
export const BudgetContext = createContext<BudgetContextProps>(null!)


// y el BudgetProvider contiene los datos y es el que se importa en los demas archivos por sus datos que incluye  
export const BudgetProvider = ({children} : BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{
                state, dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}