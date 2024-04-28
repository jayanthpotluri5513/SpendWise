import { useLoaderData } from "react-router-dom";
import { deleteItem, fetchData, waait } from "../helpers";
import Table from "../components/Table";
import { toast } from "react-toastify";

export async function expensesLoader() {
    const expenses =  await fetchData("expenses");
    return { expenses }
  }

export async function expensesAction({request}) {
    await waait();
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data)
    if(_action === "deleteExpense")
    {
        try {
            deleteItem({
              key: "expenses",
              id: values.expenseId,
  
            })
          return toast.success("Expense deleted!")
      } catch (e) {
          throw new Error("There was a problem deleting your expense..")
      }
    }
}

export const ExpensesPage =() =>
{
    const {expenses}=useLoaderData();
    return (
        <div className="grid-lg">
            <h1>All Expenses</h1>
             {expenses && expenses.length > 0 ? (
                <div className="grid-md">
                    <h2>
                        Recent Expenses <small>({expenses.length}total)</small>
                    </h2>
                    <Table expenses={expenses} />
                </div>
             ): (
                <p>No expenses to show</p>
             )}
        </div>
    )
};