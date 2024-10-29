import { readAllDebit, createDebit ,getDebitById,updateDebitById,deleteDebitById} from "../services/index.js";

export const createPaginate = (productData,page = 1,limit = 5) => {
    let paginateDate = productData.slice((page-1)*limit,page*limit)
    return paginateDate || [];
}



export const debtAllController = async(req, res, next)=>{
    const {page, limit}= req.query    
    try {
        const alldata = await readAllDebit()
        console.log(alldata);
        
        return res.status(200).send(createPaginate(alldata,page,limit))
    } catch (error) {
        next(error)
    }
}
export const createDebtController = (req, res, next)=>{
    try {
        const body = req.body
        const result = createDebit(body)
        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}

export const getDebtControllerId = async(req, res, next)=>{
    
    try {
        const id = parseInt(req.params.id)
        const data = await getDebitById(id)
        if(!data){
            res.status(400).send("ERROR")
        }
        res.status(200).send(data);
    } catch (error) {
        next(error)
    }
}
export const updateDebtControllerId = async(req, res, next)=>{
    try {
        const id = parseInt(req.params.id)
        const body = req.body
        const data = await updateDebitById(id, body)
        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export const deletDebtControllerId = async(req, res, next)=>{
    try {
        const id = parseInt(req.params.id)
        const result= await deleteDebitById(id)
        res.status(200).send(result) 
    } catch (error) {
        next(error)
    }
}
