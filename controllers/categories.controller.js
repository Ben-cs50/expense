export const listCategories = (req, res) => {
    console.log("Categories list");

    res.status(200).json({message:"Categories retrieved successfully"});
}

export const createCategory = (req, res) => {
    console.log("Creating new category");

    const categoryData = req.body

    const newCategory = {
        id: Date.now().toString(), ...categoryData
    };

    res.status(200).json({message:"Category created successfully", category: newCategory});
}

export const createCategoryRule = (req, res) =>{
    console.log("Creating a new category rule");

    const categoryRuleData = req.body

    const newCategoryRule = {
        id: Date.now().toString(), ...categoryRuleData
    };

    res.status(200).json({message:"Category rule created successfully", category: newCategoryRule});
}