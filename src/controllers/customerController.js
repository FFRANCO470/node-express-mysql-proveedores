const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer',(err,customers)=>{
            if(err){res.json(err);}
            //console.log(customers);
            res.render('customers',{
                data:customers
            });
        });
    });
};

controller.save = (req,res)=>{
    // console.log(req.body);
    // const obj = JSON.parse(JSON.stringify(req.body));  app.js, urlencoded is false
    // console.log(obj);
    
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?',[data],(err,customer)=>{
            console.log(customer);
            res.redirect('/');
        });
    });  
};

controller.delete=(req,res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id=?',[id],(err,customer)=>{
            console.log("se borro");
            console.log(customer);
            res.redirect('/');
        });
    });
}

controller.edit = (req,res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer WHERE id=?',[id],(err,customer)=>{
            res.render('customer_edit',{
                data:customer[0]
            });
        });
    });
}

controller.update = (req,res)=>{
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer set ? WHERE id = ?',[newCustomer,id],(err,rows)=>{
            console.log(rows);
            res.redirect('/');
        });
    });
}


module.exports = controller;