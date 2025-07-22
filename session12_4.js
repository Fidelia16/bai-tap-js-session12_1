let a = +prompt(" Nhap so A");
let b = +prompt("Nhap so B");
let c = +prompt("Nhap so C");
if (a>b && a>c){
    alert(`So lon nhat la A : ${a}`);
}else if(b>a && b>c){
    alert(`So lon nhat la B : ${b}`);
}else if (c>a && c>b){
    alert(`So lon nhat la C : ${c}`);
}else{
    alert("Chuong trinh khong ho tro so trung nhau");
}