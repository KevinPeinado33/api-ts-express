import { Request, Response } from 'express'

import Cliente from '../models/cliente'

export const getClientes = async (res: Response) => {
    
    const clientes = await Cliente.findAll()

    res.json({ clientes })

}

export const getClienteByNumPlaca = async (req: Request, res: Response) => {
    
    const { numPlaca } = req.params

    const cliente = await Cliente.findOne({
        where: {
            numPlaca
        }
    })

    if (!cliente) {        
        return res.status(404).json({ msg: `El cliente con el ${numPlaca} no existe.`})
    }
    
    res.json(cliente)
    
}

export const getCliente = async (req: Request, res: Response) => {
    
    const { id } = req.params

    const cliente = await Cliente.findByPk(id)

    if (cliente) {

        res.json(cliente)

    } else {
        res.status(404).json({ msg: `El cliente con el ${id} no existe.` })
    }

}

export const postCliente = async (req: Request, res: Response) => {
    
    const { body } = req

    try {

        const existePlaca = await Cliente.findOne({
            where: {
                num_placa: body.num_placa
            }
        })

        if (existePlaca) {
            return res.status(400).json({ msg: `Ya existe un cliente con la placa ${body.num_placa}` })
        }

        const cliente = Cliente.build(body)

        await cliente.save()

        res.json(cliente)

    } catch (error) {

        res.status(500).json({ msg: 'Hable con el administrador.' })

    }

}

export const putCliente = async (req: Request, res: Response) => {
    
    const { id } = req.params

    const { body } = req

    try {

        const cliente = await Cliente.findByPk(id)

        if (!cliente) {
            return res.status(404).json({ msg: `El cliente con el ${id} no existe.` })         
        } 

        await cliente.update(body)

        res.json(cliente)

    } catch (error) {

        res.status(500).json({ msg: 'Hable con el administrador.' })

    }

}

export const deleteCliente = async (req: Request, res: Response) => {
    
    const { id } = req.params

    const cliente = await Cliente.findByPk(id)

    if (!cliente) {
        return res.status(404).json({ msg: `El cliente con el ${id} no existe.` })
    }

    await cliente.destroy()

    res.json({ msg: 'El cliente ha sido eliminado.' })
    
}
