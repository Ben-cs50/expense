export const listTransactions = (req, res) => {
    console.log("A list of all transactions",);
    console.log(JSON.stringify(req.query));
    console.log(JSON.stringify(req.params));

    res.status(200).json({message: "All transactions are listed"})
}