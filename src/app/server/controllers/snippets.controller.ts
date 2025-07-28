import Snippets from "../models/snippets.models";

export const addSnippets = async (req:any, res:any) => {
    try {
        const { title, desc, coverImage, tagList, username } = req.body;

        const newSnippet = new Snippets({
            title,
            desc,
            coverImage,
            tagList,
            username
        });

        await newSnippet.save();
        res.status(201).json({
            status: "success",
            message: "Snippet added successfully!",
        });
    } catch (error) {
        console.log("Error from addSnippets controller: ", error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}

export const getSnippets = async (req:any, res:any) => {
    try {
        const snippets = await Snippets.find().sort({ createdAt: -1 });
        res.status(200).json({
            status: "success",
            data: snippets,
        });
    } catch (error) {
        console.log("Error from getSnippets controller: ", error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}