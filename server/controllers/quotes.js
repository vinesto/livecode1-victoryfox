const Quote = require('../models/quotes')

const createQuote = function (req, res) {
    let { status } = req.body
    Quote.create({
        status: status,
        user: req.user.id
    })
    .then(function (result) {
        res.status(201).json(result)
    })
    .catch(function (err) {
        res.status(401).json(err.message)
    })

}

const deleteQuote = function (req, res) {
    console.log(req.user);
    Quote.findOneAndRemove({
        _id:req.params.id,
        user:req.user.id
    })
    .then(function(quote){
        if(quote){
            res.status(201).json({
                success:true,
                message:`Quote with id ${req.params.id} deleted`
            })
        }else{
            res.status(400).json({
                message:"you are not authorized access this"
            })
        }
    })
    .catch(function(err){
        res.status(400).json({
            error:err.message
        })
    })

}

const getAllQuote = function (req, res) {
    Quote.find({})
    .then(function(quotes){
        res.status(200).json(quotes)
    })
    .catch(function(err){
        res.status(400).json(err.message)
    })
}

module.exports = { createQuote, deleteQuote, getAllQuote }