
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');

const keys = require('./config/keys');

const app = express();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kvk-admin:293344asd@ds129926.mlab.com:29926/kvk-union', { useMongoClient: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());


require('./models/item');
const Item = mongoose.model('items');

const multerConf = {
    storage: multer.diskStorage({
        destination: function(req, file, next){
            next(null, './uploads');
        },
        filename: function(req, file, next){
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.' + ext);
        }
    })
};
app.post('/add',multer(multerConf).single('image') , async (req, res) => {
    const rawImage = fs.readFileSync(req.file.path);
    const encImage = rawImage.toString('base64');
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        size: req.file.size,
        contentType: req.file.mimetype,
        image: Buffer(encImage, 'base64')
     });
    try {
        await item.save();
        res.send(item);
    } catch (err) {
        res.status(422).send(err);
    }

});

app.put('/api/edit/:id', multer(multerConf).single('image'), (req, res) => {
    console.log(req.file);
    const rawImage = fs.readFileSync(req.file.path);
    const encImage = rawImage.toString('base64');
    Item.findOne({ _id: req.params.id })
        .then(item => {
            item.name = req.body.name || item.name,
            item.price = req.body.price || item.price,
            item.description = req.body.description || item.description,
            item.size = req.body.size || item.size,
            item.contentType = req.file.mimetype || item.contentType,
            item.image = Buffer(encImage, 'base64') || item.image
            item.save()
                .then(item => {
                    res.set('Content-Type', item.contentType);
                    res.send(item);
                });
        });      
});

app.delete('/api/remove/:id', (req, res) => {
    Item.findOneAndRemove({ _id: req.params.id})
        .then(() => {
            res.send(req.params.id)
        });
});

app.get('/api/items', (req, res) => {
    Item.find({})
        .then(items => {
            res.send({
                items
            });
        }); 
});

app.get('/api/items/:id', (req, res) => {
    Item.findOne({
        _id: req.params.id
    })
        .then(item => {
            res.set('Content-Type', item.contentType);
            res.send(item.image);
        });
});
   
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build')); 
    const path = require('path');

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
console.log(`App running at ${PORT}`);
app.listen(PORT);