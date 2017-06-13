const express = require('express');
const router = express.Router();

router.get('/registrarce', (req, res , next)=>{
 	res.send("registrate");
});

router.get('/autenticar', (req, res , next)=>{
 	res.send("autenticar");
});

router.get('/perfil', (req, res , next)=>{
 	res.send("perfil");
});

router.get('/validar', (req, res , next)=>{
 	res.send("validar");
});
module.exports = router;