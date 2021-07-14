//import express Module
const express = require('express');
// create express application
const app = express();
// import body-parser
const bodyParser = require('body-parser');

//import path module
const path = require('path');
//import multer module
const multer = require('multer');

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// /images = backend/images : partie backend
app.use('/images', express.static(path.join('backend/images')));
// type de l'image
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
};
// multer va 
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    // 
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    // else cb:callback
    cb(null, 'backend/images')
  },
  // changer le name de majuscule en miniscule et les espace par -:
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    // date.now : pour differencier entre les file
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});

//import mongoose  Module
const mongoose = require('mongoose');
//connect DB and create restaurant(nom de la base de donnee) DB
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('./models/user');
const Plat = require('./models/plat');
const Contact = require('./models/contact');
const Follows = require('./models/folow');


const bcrypt = require('bcrypt');
//security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// traitement logique de signup
app.post('/users/signup', multer({ storage: storage }).single('avatar'), (req, res) => {
    console.log('Here into Add User');
    // get json object from FE
    console.log('Here Object', req.body);
    let url = req.protocol + '://' + req.get('host');
    bcrypt.hash(req.body.password, 10).then(
      (cryptedPwd) => {
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: cryptedPwd,// mot de passe crypted
          tel: req.body.tel,
          role: req.body.role,
        avatar: url + '/images/' + req.file.filename
  
  
        });
        user.save().then(
          (result) => {
            if (result) {
              res.status(200).json(
                {
                  message: 'user added with success'
                }
              );
            }
          }
        );
      }
    )
  
  
  });
  // traitement logique de login

  app.post('/users/login', (req, res) => {
    User.findOne({ email: req.body.email }).then((findedUser) => {
      if (!findedUser) {
        res.status(200).json({
          message: "0",
        });
      }
      return bcrypt.compare(req.body.password, findedUser.password);
    })
      .then((correctUserPwd) => {
        console.log("correctUserPwd", correctUserPwd);
        if (!correctUserPwd) {
          res.status(200).json({
            message: "1",
          });
        }
        User.findOne({ email: req.body.email }).then((finalUser) => {
          let user = {
            id: finalUser._id,
            firstName: finalUser.firstName,
            lastName: finalUser.lastName,
            role: finalUser.role,
          };
          res.status(200).json({
            user: user,
            message: "2",
          });
        });
      });
  });
  // traitement logique de add plats

  app.post('/plats/', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('Here into Add plat');
    // get json object from FE
    console.log('Here Object', req.body);
    // host : nom du domaine
    let url = req.protocol + '://' + req.get('host');
    const plat = new Plat({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      idChef:req.body.idChef ,
      img: url + '/images/' + req.file.filename
  
    });
    plat.save();
  });
    // traitement logique de search plats by name

  app.get('/plats/search/:name', (req, res) => {
    let name = req.params.name;
    console.log('Here into get By Name Plat', name);
    Plat.find({ name: {$regex: name,$options:'i'} }).then(
      (result) => {
        res.status(200).json({
          searchedPlats: result
        });
      }
    )
  
  
  });
    // traitement logique de getAllPlats (affichage des plats) plats

  app.get('/plats', (req, res) => {
    console.log('Here into get All plats');
    //get All plats objects from DB (dynamic)
    Plat.find((err, docs) => {
      if (err) {
        console.log('error with DB');
      } else {
        res.status(200).json({
          findedplats: docs
        });
  
      }
    });
  
  
  });
      // traitement logique de getById (affichage des plats) plats

  app.get('/plats/:id', (req, res) => {
    let id = req.params.id;
    console.log('Here into get By Id ID', id);
    Plat.findOne({ _id: id }).then(
      (result) => {
        res.status(200).json({
          findedplats: result
        })
      }
    )
  });
 // traitement logique de edit plats (modiification des plats) 

  app.put('/plats/:id', (req, res) => {
    console.log('Here into put By Id');
    let newPlat = new Plat({
      _id: req.body._id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
  
    });
    Plat.updateOne({ _id: req.body._id }, newPlat).then(
      (result) => {
        if (result) {
          res.status(200).json({
            message: 'Plat Edited with Success'
          })
        }
      }
    );
  });
 // traitement logique de delete

  app.delete('/plats/:id', (req, res) => {
    console.log('Here into delete By Id ');
    let id = req.params.id;
    Plat.deleteOne({ _id: id }).then(
      (result) => {
        if (result) {
          res.status(200).json({
            message: 'Deleted with success'
          })
        }
      }
    )
  });
// traitement logique de envoi messages du utilisateur au admin 
  app.post('/messages',(req, res) => {
    console.log('Here into Add message');
    // get json object from FE
    console.log('Here Object', req.body);
    // host : nom du domaine
    const contact = new Contact({
      message: req.body.message,
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject
  
    });
    contact.save();
  });
  // traitement logique de affichage messages  
  app.get('/messages', (req, res) => {
    console.log('Here into get All messages');
    //get All plats objects from DB (dynamic)
    Contact.find((err, docs) => {
      if (err) {
        console.log('error with DB');
      } else {
        res.status(200).json({
          findedMsgs: docs
        });
  
      }
    });
  
  
  });
 
 // traitement logique de affichage des utilisateurs 

  app.get('/users', (req, res) => {
    let role = req.params.role;
    console.log('Here into get By role user',role);
    User.find({ role: "user" }).then(
      (result) => {
        res.status(200).json({
          findedRoles: result
        });
      }
    )
  
  
  });
// traitement logique de affichage des chefs 
  app.get('/users/chef', (req, res) => {
    let role = req.params.role;
    console.log('Here into get By role chef',role);
    User.find({ role: "chef" }).then(
      (result) => {
        res.status(200).json({
          findedChefs: result
        });
      }
    )
  
  
  });
 // traitement logique de delete des utilisateurs 
  app.delete('/users/:id', (req, res) => {
    console.log('Here into delete By Id ');
    let id = req.params.id;
    User.deleteOne({ _id: id }).then(
      (result) => {
        if (result) {
          res.status(200).json({
            message: 'Deleted with success'
          })
        }
      }
    )
  });
// traitement logique de delete des chefs 
 

  // get platByIdChef
  
  // //ajouter les plats favoris
  // app.post('/SavePlatsFavoris', (req, res)=>{
  //   const favoris = new Favoris({
  //     name:req.body.name,
  //     description:req.body.description,
  //     price:req.body.price,
  //     img:req.body.img,
  //   });
  //   contact.save();
  // })

  //   //gET les plats favoris
  //   app.get('/GetPlatsFavoris', (req, res)=>{

  //   })


// get les plats par chef:
// app.get('/users/chefs', (req, res) => {
//   let idChef = req.params.idChef;
//   console.log('Here into get plats By  ID', idChef);
//   Plat.aggregate([
//     {$lookup :{
//       from:'users',
//       localField:'_id',
//       foreignField:'_id',
//       as:'idChef'
  
//   }},
//   {$match: {role:'chef'}}
//   ]).toArray((err, res) => {
//   if (err) {
//     console.log('error with DB');
//   } 
// });
// });
app.get('/plats/plats-chef/:id', (req, res) => {
  let id = req.params.id;
  console.log('Here into get By Id ID Chef', id);
  Plat.find({ idChef: id }).then(
    (result) => {
      res.status(200).json({
        findedplatsByChef: result
      })
    }
  )
});

//add New follower for user
app.post('/followers/follow', function (req, res) {
  try {
    Follows.findOne({'follower': req.body.follower, 'following': req.body.following}, function (err, isfollowExit) {
          if (err) {
              res.json({status: 0, message: err});
          } else {
              if (isfollowExit) {
                  res.json({status: 0, message: 'follow is already existing'});
              } else {
                  try {
                      const follow = new Follows({
                          follower: req.body.follower,
                          following: req.body.following,
                          followedAt: Date.now()
                      });
                      follow.save(function (err) {
                          if (err) {
                              res.json({status: 0, message: err});
                          } else {
                            res.json({status: 200, message: 'Added with success'
                            })
                          }
                      });
                  } catch (err) {
                      console.log(err);
                      res.json({
                          status: 0,
                          message: '500 Internal Server Error',
                          data: {}
                      })

                  }
              }
          }
      });
  } catch (err) {
      console.log(err);
      res.json({
          status: 0,
          message: '500 Internal Server Error',
          data: {}
      })

  }
});
// remove follower for user
app.post('/followers/unfollow', function (req, res) {
  try {
      Follows.findOne({'follower': req.body.follower, 'following': req.body.following}, function (err, follow) {
          if (err) {
              res.json({status: 0, message: err});
          } else {
              try {
                  Follows.remove({_id: follow._id}, function (err) {
                      if (err) {
                          res.json({status: 0, message: err});
                      } else {

                          if (!follow) {
                              res.json({status: 0, message: "bad data "});
                          } else {
                              res.json({status: 200, message: "success"});
                          }
                      }
                  });
              } catch (err) {
                  console.log(err);
                  res.json({
                      status: 0,
                      message: '500 Internal Server Error',
                      data: {}
                  })

              }
          }
      });
  } catch (err) {
      console.log(err);
      res.json({
          status: 0,
          message: '500 Internal Server Error',
          data: {}
      })

  }
});

// // get list followers by user
// poppulate(): processus de remplacement automatique des chemins d'acces
// .exec():
app.post('/followers/followersByUser', function (req, res) {
  try {
      const follow = req.body;

      if (!follow.follower) {
          res.json({status: 0, message: "bad data "});
      } else {

          Follows.find({follower: follow.follower}).populate('following').exec(function (err, followers) {
              if (err) {
                  res.json({status: 0, message: err});
              } else {
                  res.json({status: 200, message: "get list  followers By User ", data: followers});
              }
          });
      }
  } catch (err) {
      console.log(err);
      res.json({
          status: 0,
          message: '500 Internal Server Error',
          data: {}
      })

  }
});

  module.exports = app;
