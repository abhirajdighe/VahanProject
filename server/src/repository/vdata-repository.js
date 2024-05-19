const {vahanData} = require('../models/index')

class VahanRepository{

    async insertData({id,name,email,mobile,dob}){
        try{
            const vdata = await vahanData.create({id,name,email,mobile,dob});
            return vdata;
        }catch(error){
            console.log("Something went wrong in repository layer.");
            console.log(error)
            throw {error};
        }
    }

    async getData(){
        try{
            const vdata = await vahanData.findAll();
            return vdata;
        }
        catch(error){
            console.log("Something went wrong in repository layer.");
            throw {error};
        }
    }

    async deleteData(dataId){
        try{
            await vahanData.destroy({
                where:{
                    id:dataId
                }
            })
            return true;
        }catch(error){
            console.log("Error occure in Repository Layer.");
            throw error;
        }
    }

    async updatedata(dataId,data){
        const udata = {
            name:data.name,
            email:data.email,
            mobile:data.mobile,
            dob:data.dob,
        }
        try{
            
            const result = await vahanData.update(data,{
                where:{
                    id:dataId
                },
            })
            
            return result;
        }
        catch(error){
            // console.log(dataId)
            console.log('Something went wrong in crud repository');
            throw {error};
        }
    }

}

module.exports=VahanRepository;