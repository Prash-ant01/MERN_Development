var mysql =require("mysql");
var express =require("express");
var app = express();
var cors =require("cors");

app.use(cors());
app.use(express.json());


var con=mysql.createConnection(
    {
        host : "localhost",
        user :"root",
        password : "",
        database : "ITM",
    }
);
port= 5646 ;
app.listen(port,()=>{
    console.log("Connected");
 });

con.connect(function(err)
{
    if(err) throw err;
    console.log("connection");
}
);

app.post("/api/usereg",(req,resp)=>{
    var uname=req.body.uname;
    var uemail=req.body.uemail;
    var upass=req.body.upass;
    var uadd=req.body.uadd;
    // console.log(uname);
    console.log(uemail);

    const query1="select * from user_reg where uemail=?";

    con.query(query1,[uemail],(err,result)=>{
    if(result.length > 0)
    {
        resp.send({message:"Email id Not available"});
    }
    else
    {
        const query="Insert into user_reg  (uname,uemail,upass,uadd) values(?,?,?,?)";

        con.query(query,[uname,uemail,upass,uadd]);
     
        resp.json("");
    }
   });

    

});
app.post("/api/uselog",(req,resp)=>{
    var uemail=req.body.uemail;
    var upass=req.body.upass;
    // console.log(uemail);
    // console.log(upass);

    const query="select * from user_reg where uemail=? and upass=?";

   con.query(query,[uemail,upass],(err,result)=>{
    if(result.length > 0)
    {
        console.log(result);
        resp.send(result);
    }
    else
    {
        //console.log("wrong");
        resp.send({message:"Wrong Email Id and Password"});
    }
   });

});

app.post("/api/addproduct",(req,resp)=>{
    var pname=req.body.pname;
    var price=req.body.price;
    console.log(pname);
    
        const query="Insert into product_info  (p_name,p_price) values(?,?)";

        con.query(query,[pname,price]);
     
        resp.json("");
   });

   app.get("/api/getproduct",(req,resp)=>{

        const query="Select * from product_info ";

        con.query(query,(error,result) => {
            console.log(result);
            resp.send(result);

        });
     
       
   });

   app.post("/api/addcart",(req,resp)=>{
    var pid=req.body.pid;
    var uemail=req.body.uemail;
    console.log(uemail);
    
    const query1="select * from cart where product_id=? and user_email=?";

    con.query(query1,[pid,uemail],(err,result)=>{
    if(result.length > 0)
    {
        resp.send({message:"Product already in cart "});
    }
    else
    {
        const query="Insert into cart  (product_id,user_email) values(?,?)";

        con.query(query,[pid,uemail]);
     
        resp.json("");
    }
   });
        
   });

   app.get("/api/getcart",(req,resp)=>{

    const query="Select * from cart ";

    con.query(query,(error,result) => {
        console.log(result);
        resp.send(result);

    });
 
   
});

