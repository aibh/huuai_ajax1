function NguoiDungService(){

    this.layDanhLayNguoiDung = function(){
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
    }

    this.themNguoiDung = function(nguoiDung){
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoiDung
        })
        .done(function(result){
            if(result === "tai khoan da ton tai !"){
                alert(result);
            }else{
                location.href = ""; 
            }
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.xoaNguoiDung = function(taiKhoan){
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type: "DELETE"
        })
        .done(function(result){
            location.reload();
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.timKiemNguoiDung = function(chuoiTimKiem){
        var mangTimKiem = []
        var dsnd = JSON.parse(localStorage.getItem("danhSachNguoiDung"));

        dsnd.map(function(item){
            if(item.TaiKhoan.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
                mangTimKiem.push(item);
            }
        })

        return mangTimKiem;
    }
    this.layViTriNguoiDung = function(taiKhoan){
        // var vitri; 
        var danhSachNguoiDung = JSON.parse(localStorage.getItem("danhSachNguoiDung"));
        // danhSachNguoiDung.map(function(item, index){
        //    if(item.TaiKhoan === taiKhoan){
        //        vitri = index;
        //     return vitri;
        //    }
    //    })
    return danhSachNguoiDung.findIndex(function(item){
        return item.TaiKhoan === taiKhoan;
    })
    }
}