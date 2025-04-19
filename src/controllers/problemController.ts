
import { Request, Response } from 'express';
import Problem from '../models/problemModel';

export const createProblem = async (req: Request, res: Response) => {
    console.log("api is hetting.....")
    try {
        const { title, description, difficulty } = req.body;
        const problem = new Problem({ title, description, difficulty });
        await problem.save();
        res.status(201).json(problem);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};



export const dymmyAPI = async(req: Request, res: Response) =>{
    res.status(200).json({data: "Fetched sucessfully", status: 200})
}
