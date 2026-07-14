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
