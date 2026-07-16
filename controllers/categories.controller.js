export const listCategories = (req, res) => {
    console.log("Categories list");

    res.status(200).json({message:"Categories retrieved successfully"});
}

export const createCategory = (req, res) => {
    console.log("Creating new category");

    const categoryData = req.body

    const newCategory = {
        id: Date.now().toString(), ...categoryData
    }

    res.status(200).json({message:"Category created successfully", category: newCategory})
}