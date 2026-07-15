export const listCategories = (req, res) => {
    console.log("Categories list");

    res.status(200).json({message:"Categories retrieved successfully"});
}