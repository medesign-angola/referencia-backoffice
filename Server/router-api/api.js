const express = require('express')
const router = express.Router()




router.get('/', (req, resp) => {
    resp.send('main api');
})

router.get('/login', () => {
    // res.send('Login api works');
    // let userData = req.body;

    return userArray = (
        {
            'username': 'pati',
            'pass': 'pass',
            'error': false,
            'email': 'pati@gmail.com'
        }
    )

    
    

})

// router.get('/login', (req, res) => {
//     res.send('Login');
// })

module.exports = router