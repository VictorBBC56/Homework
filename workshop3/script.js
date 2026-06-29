for(i=1;i<=5;i++){
    document.write("<h",i,">","Computer Science @ NPRU","</h",i,">","<br>");
}

for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
        document.write("<img src = 'img/seal.jpg' width = '60'>");
    }
    document.write("<br>");
}

num = 1;
for(i=1;i<=10;i++){
    for(j=1;j<=num;j++){
        document.write("<img src = 'img/seal.jpg' width = '60'>");
        
    }
    num++;
    document.write("<br>");
}