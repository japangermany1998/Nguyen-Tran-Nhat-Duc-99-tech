import { Router } from 'express';
import {
    getResources,
    createResource, updateResource, deleteResource, getResourceById,
} from '../controller/resourceController';

const router = Router();

router.post('/', createResource);
router.get('/', getResources);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);
router.get('/:id', getResourceById);


export default router;