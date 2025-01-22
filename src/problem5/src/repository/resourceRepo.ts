import {resource} from "../model/resourceModel";
import {Op} from "sequelize";

export const insertResource = async (name:string)  =>  {
    return await resource.create({
        name: name
    }).catch((error) => {throw error});
}

export const queryResources = async(name: string) => {
    return await resource.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    }).catch ((error) => {
        throw error;
    })
}

export const queryResourceById = async(id: string) => {
    return await resource.findOne({ where: { id: Number(id) } }).catch((error) => {throw error});
}

export const updateResourceById = async (id: string, name: string) => {
    return await resource.update(
        {name: name},
        {where: { id: Number(id) }},

    ).catch((error) => {throw error});
}

export const deleteResourceById = async (id: string) => {
    return await resource.destroy({ where: { id: Number(id) } })
        .catch((error) => {throw error});
}