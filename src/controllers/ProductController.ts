import { Request, Response } from 'express';
import ProductModel from '../models/ProductModel';

export default {
    async index(req: Request, res: Response) {
        const result = await ProductModel.findAll();

        return res.json(result);
    },

    /* NOT IN USE AS IT WAS NOT REQUESTED */
    async show(req: Request, res: Response) {
        const { search_query } = req.body;

        const result = await ProductModel.findAll({
            where: {
                id: search_query,
                no_codigo: search_query,
                tx_descricao: search_query,
                no_quantidade: search_query,
                no_valor: search_query
            }
        })

        return res.json(result);
    },

    async store(req: Request, res: Response) {
        const { 
            no_codigo,
            tx_descricao,
            no_quantidade,
            no_valor
        } = req.body;

        const validation = await ProductModel.findAll({
            where: {
                no_codigo
            }
        })

        if(validation.length > 0) {
            return res.status(403).json({message: 'Código de produto já existente.'})
        }
        else{
            const result = await ProductModel.create({
                no_codigo,
                tx_descricao,
                no_quantidade,
                no_valor,
                created_at: new Date(),
            });
    
            return res.json(result);
        }

    },

    async update(req: Request, res: Response) {
        const { id } = req.params

        const { 
            no_codigo,
            tx_descricao,
            no_quantidade,
            no_valor
        } = req.body;

        const result = await ProductModel.update({
                no_codigo,
                tx_descricao,
                no_quantidade,
                no_valor
            },
            {
                where: { id }
        });

        return res.json(result);
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params

        const result = await ProductModel.destroy({
            where: { id }
        });

        return res.json(result);
    },
};