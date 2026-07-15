export const listTransactions = (req, res) => {
    console.log("A list of all transactions");
    console.log(JSON.stringify(req.query));
    console.log(JSON.stringify(req.params));

    res.status(200).json({message: "All transactions are listed"})
}

export const getTransactionById = (req, res) => {
    console.log("Fetching transaction with Id");
    console.log(JSON.stringify(req.params));

    res.status(200).json({message:`Transaction with ID ${req.params.id}`})
}
export const updateTransactionById = (req, res) => {
    console.log("Updating transaction with Id");
    console.log(JSON.stringify(req.params));
    console.log(JSON.stringify(req.body));

    const {id} = req.params
    const update = req.body

    const updateTransaction = {id, ...update}

    res.status(200).json({message:`Transaction ${id} updated successfully`, transaction: updateTransaction});

}
export const createManualTransaction = (req, res) => {
    console.log("Creating manual transaction");

    const transactionData = req.body

    const newTransaction = {
        id: Date.now().toString(),
        ...transactionData

    };
    res.status(200).json({message:"Manual transaction created successfully", transaction: newTransaction})
}