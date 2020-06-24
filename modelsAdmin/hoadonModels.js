'user strict';
var sql = require('./db.js');

//Task object constructor
var HoaDon = function(hoadon){
    console.log(hoadon);
    this.MaVeXe = hoadon.MaVeXe;
    this.Email = hoadon.Email;
	this.NgayDat = hoadon.NgayDat;
};
HoaDon.getAllHoaDon = function getAllHoaDon(result) {
    sql.query("Select * from hoadon", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
           // console.log('Ben Xe : ', res);

            result(null, res);
        }
    });
};
HoaDon.getDoanhThu = function(NgayDat,result){
    var query="Select hoadon.MaVeXe as MaVeXe, vexe.MaCX as MaCX, chuyenxe.BienSoXe as BienSoXe, vexe.SoGhe as SoGhe, khachhang.TenKH as TenKH, hoadon.Email as Email, tuyenxe.DonGia as DonGia from hoadon,vexe,khachhang,chuyenxe,tuyenxe where hoadon.MaVeXe=vexe.MaVeXe and hoadon.Email=khachhang.Email and vexe.MaCX=chuyenxe.MaCX and chuyenxe.MaTX=tuyenxe.MaTX and hoadon.NgayDat = ?";
    sql.query(query,NgayDat,function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= HoaDon;