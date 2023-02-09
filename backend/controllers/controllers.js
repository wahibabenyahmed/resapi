
const productSchema = require('../model/Product')


exports.AddProduct = async(req,res)=>{
const newArticle= new productSchema(req.body);

try{
await newArticle.save()
res.status(200).json({msg:'product created',newArticle})
}catch(error){
    res.status(500).json({msg:'can not created a new product'})
}

}

exports.GetProduct = async(req,res)=>{


    try{
    const ProductList = await productSchema.find();
    res.status(200).json({message:"all product",ProductList});
    }catch(err){
    res.status(500).json({msg:'can not get any product'})
    }}


    

    exports.deleteProduct = async(req,res)=>{

 const {id}=req.params;
        try{
        const ProductRemove = await productSchema.findOneAndDelete(id);
        res.status(200).json({msg:"delete with success",ProductRemove});

        }catch(err){
        console.log(err);
        res.status(500).json({msg:'can not delete any product'})
        }}

    

        exports.updateProduct=async(req,res)=>{
            const {id} =req.params;
            try{
                
                const ProductUpdated = await productSchema.findByIdAndUpdate(id, {$set:{...req.body}},{new:true});
                res.status(200).json({msg:'sucess',ProductUpdated})
            }
            catch(err){
                res.status(500).json({msg:'cannot update '})
            }
            }
            
        
            exports.GetById= async(req,res)=>{


                try{
                const GetProduct= await productSchema.findById(id);
                res.status(200).json({message:"roduct find",GetProduct});
                }catch(err){
                res.status(500).json({msg:'can not find this product'})
                }}