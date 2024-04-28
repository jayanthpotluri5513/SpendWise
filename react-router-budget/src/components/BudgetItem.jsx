import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/solid";
import { calcualateSpentByBudget, formatCurrency, formatPercentage } from "../helpers";
import { Form, Link } from "react-router-dom";

const BudgetItem =({budget, showDelete =false}) => {
    const {id,name,amount, color} =budget;
    const spent =calcualateSpentByBudget(id)
    return (
        <div className="budget"
             style={{
                "--accent": color
             }}
         >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
            {formatPercentage(spent/amount)}
            </progress>
                <div className="progress-text">
                    <small>{formatCurrency(spent)}</small>
                    <small>{formatCurrency(amount-spent)}</small>
            </div>
            {
                showDelete ? (
                    <Form
                     method="post"
                     action="delete"
                     onSubmit={(event)=> {
                        if(
                            !confirm(
                                "Are you sure want to permanently delete this budget?"
                            )
                        ) {
                            event.preventDefault();
                        }

                     }}
                     >
                      <button type="submit" className="btn"> 
                      <span> Delete Budget</span>
                      <TrashIcon width={20} />
                      </button>

                    </Form>
                ): (
                  <div className="flex-sm">
                  <Link
                     to={`/budget/${id}`}
                     className="btn"
                  >
                    <span> View Details</span>
                    <BanknotesIcon width={20} />
                  </Link>
                  </div>
                )}

        </div>

    )
}
export default BudgetItem