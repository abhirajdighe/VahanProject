const {VahanService} = require('../services/index');

const vahanService = new VahanService();

const create = async (req,res)=>{
    try{
        let result = req.body
        console.log(result)
        let data={
            id:result.id,
            name:result.name,
            email:result.email,
            mobile:result.mobile,
            dob:result.dob
        }

        console.log(data);

        const vdata = await vahanService.insertData(data);
        return res.status(201).json({
            data:vdata,
            success:true,
            message:'Successfully inserted data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able insert data',
            err:error
        })
    }
}

const get = async (req,res)=>{
    try{
        const vdata = await vahanService.getData();
        return res.status(201).json({
            data:vdata,
            success:true,
            message:'Successfully fetched data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able fetch data',
            err:error
        })
    }
}

const destroy = async (req,res)=>{
    try{
        const response = await vahanService.deleteData(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully deleted data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able delete data',
            err:error
        })
    }
}

const update = async (req,res)=>{
    try{
        const response = await vahanService.updateData(req.body.id,req.body);
        console.log(req.body)
        console.log(req.body.id)
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully updated data',
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able update data',
            err:error
        })
    }
}

module.exports={
    create,
    get,
    destroy,
    update,
    // delete:deleteFlight
}