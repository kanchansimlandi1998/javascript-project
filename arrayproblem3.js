let items=[250,645,300,900,50];
for(i=0;i<items.length;i++){
    let price=items[i]/10;
    items[i]=items[i]-price;
}
console.log(items);