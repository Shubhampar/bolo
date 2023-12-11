const express = require('express')
const router= express.Router()
const Response= require('../Models/ResponseModel')

router.get('/:formId',async (req,res)=>{
    try {
        const response= await Response.find({"formId":req.params.formId})
        res.send({message:"Response Fetched Successfully",data:response})
    } catch (error) {
        res.send(error.message)
    }
})
router.post('/',async (req,res)=>{
    const data= req.body
    if(!data){ res.status(404).send({message:"Please Add Body"}) }
    try {
        const response= await Response.create(data)
        res.send({message:'Form Created Successfully',data:response})
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router