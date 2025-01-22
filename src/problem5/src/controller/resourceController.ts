import {Request, Response} from 'express';
import {
    deleteResourceById,
    insertResource,
    queryResourceById,
    queryResources,
    updateResourceById
} from "../repository/resourceRepo";

export const createResource = async (req: Request, res: Response) => {
    const name = req.body.name as string;

    insertResource(name).then((newResource) => {
        res.status(201).json(newResource);
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    })

};

export const getResources = async (req: Request, res: Response) => {
    const name = req.query.name as string || ''

    queryResources(name).then((resources) => {
        res.status(201).json(resources)
    }).catch ((error) => {
        res.status(500).json({ error: error.message});
    })

};

export const getResourceById = async (req: Request, res: Response) => {
    const { id } = req.params;
    queryResourceById(id).then((getResource) => {
        if (!getResource) {
            res.status(404).json({ error: 'Resource not found' });
            return
        }

        res.status(200).json(getResource);
    }).catch ((error) => {
        res.status(500).json({ error: error.message });
    })
};

export const updateResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    updateResourceById(id, name).then(() => {
        res.status(200).json("Updated successfully");
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    })
};

export const deleteResource = async (req: Request, res: Response) => {
    const { id } = req.params;
    deleteResourceById(id).then(() => {
        res.status(204).send();
    }).catch ((error) => {
        res.status(500).json({ error: error.message });
    })
};
