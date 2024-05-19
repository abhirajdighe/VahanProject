const {VahanRepository} = require('../repository/index')

class VahanService {
    constructor(){
        this.vahanRepository = new VahanRepository()
    }

    async insertData(data){
        try{
            const vdata = await this.vahanRepository.insertData(data)
            return vdata
        }catch(error){
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }

    async getData(){
        try{
            const vdata = await this.vahanRepository.getData();
            return vdata;
        }catch(error){
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }

    async deleteData(dataId){
        try{
            const vdata = await this.vahanRepository.deleteData(dataId);
            return vdata;
        }catch(error){
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }

    async updateData(dataId,data){
        try{
            const vdata = await this.vahanRepository.updatedata(dataId,data);
            return vdata;
        }catch(error){
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }
}

module.exports = VahanService;