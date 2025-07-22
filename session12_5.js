let score = +prompt("Nhap so diem cua ban");
if(score>10 || score <0){
    alert("So ban nhap khong hop le");
}
else if(score>=9){
    alert("Hoc sinh xuat sac");
}
else if (score>=8){
    alert("Hoc sinh gioi");
}else if( score>=6.5){
    alert("Hoc sinh kha");
}else if( score>=5){
    alert("Hoc sinh trung binh");
}else{
    alert("Hoc sinh yeu");
}