const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!')) //



app.use(express.static('public'))
app.use(express.static('sunghoimg'))

const path = require('path');
const router = express.Router();


router.get('/detail', function (req, res) {
    console.log(req.query.email);
    res.send('Request parameters : ' + req.query.email + ', ' + req.query.password + ', ' + req.query.checkbox + ', ' + req.query.radio
        + ', ' + req.query.Username + ', ' + req.query.Something)
});

router.get('/detail2', function (req, res) {
    console.log(req.query);
    res.send('Email : ' + req.query.email1 + '  Password : ' + req.query.password1 + '  checkbox : ' + req.query.checkbox1 +'<a href="/jo_typography2">beomjin8</a>')
});

router.get('/detail3', function (req, res) {
    console.log(req.query);
    res.send('Email : ' + req.query.email2 + '  Password : ' + req.query.password2 + '  Text : ' + req.query.text)
});

router.get('/detail4', function (req, res) {
    console.log(req.query);
    res.send('list1 : ' + req.query.list1 + '  list2 : ' + req.query.list2)
});

router.get('/detail5', function (req, res) {
    console.log(req.query);
    res.send('Success : ' + req.query.Success + '  Warning : ' + req.query.Warning + '  Error : ' + req.query.Error)
});

router.get('/textadd', function (req, res) {
    console.log(req.query);
    res.send('제목 : ' + req.query.text1 + '  내용 : ' + req.query.text2 + '  날짜 : ' + req.query.text3 + '  작성자 : ' + req.query.text4)
});

router.get('/login1', function (req, res) {
    console.log(req.query);
    res.send('email: ' + req.query.loginemail + '  password : ' + req.query.loginpassword + '  check : ' + req.query.logincheckbox)
});



router.get('/action_page', function (req, res) {
    console.log(req.query);
    res.send('E-mail : '+req.query.email+', Password : '+req.query.password+', On/Off : '+req.query.check)
});


router.get('/action_page2', function (req, res) {
    console.log(req.query);
    res.send('select one : '+req.query.single_num+', multiple select : '+req.query.multi_num)
});

router.get('/action_page3', function (req, res) {
    console.log(req.query);
    res.send('E-mail : '+req.query.email+', Password : '+req.query.password+', Text : '+req.query.addition_text)
});

router.get('/action_page4', function (req, res) {
    console.log(req.query);
    res.send('Disabled : '+req.query.disabled+', Success : '+req.query.success+', Warning : '+req.query.warning+', Error : '+req.query.error)
});

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/beomjin', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_utilities2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_utilities2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_try_utilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_grid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_typography1', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_typography1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_typography2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_typography2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/grid1', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/grid1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/grid2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/grid2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_table1', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/table1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_table2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/table2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_image', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_image.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_button', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_button.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_collapse', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_collapse.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_carousel', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_carousel.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_dropdowns', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_dropdowns.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_navbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_navbar.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_form', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_form.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_inputTest', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_inputTest.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sungho', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/sungho.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_01Utilities1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_01Utilities1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_02Utilities2', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_02Utilities2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_03Grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_03Grid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_04Typography1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_04Typography1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/0717_05Typography2', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_05Typography2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_06Table1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_06Table1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_06Table2 responsive', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_06Table2 responsive.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_07image', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_07image.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_08Buttons', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_08Buttons.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_09Collapse', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_09Collapse.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_09Collapse2', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_09Collapse2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_01Dropdowns1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_01Dropdowns1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_Navber1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_Navber1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_Navber2', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_Navber2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_Input_form_grouo', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_Input_form_grouo.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_Components', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_Components.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_Card1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_Card1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_Input_form_test', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_Input_form_test.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/notice.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/login.html'));
    //__dirname : It will resolve to your project folder.
});


app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
